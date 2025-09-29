/**
 * API Middleware para React.js
 * Conecta com os endpoints do SRI Festival
 * 
 * Endpoints:
 * - REST API: https://admin.srifestival.com.br/items/
 * - GraphQL: https://admin.srifestival.com.br/graphql
 */

import axios from 'axios';

// Configuração base da API
const BASE_URL = 'https://admin.srifestival.com.br';
const GRAPHQL_ENDPOINT = `${BASE_URL}/graphql`;

// Configuração do Axios
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

// Interceptor para logging (opcional)
apiClient.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('❌ Response Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

/**
 * FUNÇÕES REST API
 */

// Função genérica para fazer requisições GET
const fetchFromAPI = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response.data?.data || response.data;
  } catch (error) {
    throw new Error(`Erro ao buscar dados de ${endpoint}: ${error.message}`);
  }
};

// Buscar lineup completo
export const getLineup = async () => {
  return await fetchFromAPI('/items/lineup');
};

// Buscar lineup agrupado por data
export const getLineupByDate = async () => {
  return await fetchFromAPI('/items/lineup?groupBy[]=date');
};

// Buscar lineup com filtros
export const getLineupFiltered = async (filters = {}) => {
  const queryParams = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(`filter[${key}]`, value);
    }
  });

  const endpoint = `/items/lineup${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
  return await fetchFromAPI(endpoint);
};

// Buscar post por slug
export const getPostBySlug = async (slug) => {
  if (!slug) {
    throw new Error('Slug é obrigatório');
  }

  const endpoint = `/items/posts?filter[slug][_eq]=${slug}`;
  const data = await fetchFromAPI(endpoint);

  // Retorna o primeiro item encontrado
  return Array.isArray(data) ? data[0] : data;
};

// Buscar todos os posts
export const getAllPosts = async () => {
  return await fetchFromAPI('/items/posts');
};

// Buscar posts com paginação
export const getPostsPaginated = async (page = 1, limit = 10) => {
  const endpoint = `/items/posts?page=${page}&limit=${limit}`;
  return await fetchFromAPI(endpoint);
};

/**
 * FUNÇÕES GRAPHQL
 */

// Cliente GraphQL genérico
const graphqlRequest = async (query, variables = {}) => {
  try {
    const response = await axios.post(
      GRAPHQL_ENDPOINT,
      {
        query,
        variables
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      }
    );

    if (response.data.errors) {
      throw new Error(`GraphQL Error: ${response.data.errors.map(e => e.message).join(', ')}`);
    }

    return response.data.data;
  } catch (error) {
    throw new Error(`Erro na requisição GraphQL: ${error.message}`);
  }
};

// Query para buscar sponsors
export const getSponsors = async () => {
  const query = `
    query GetSponsors {
      sponsor {
        id
        sponsor_name
        sponsor_image {
          id
          title
        }
        sponsor_type {
          id
          sponsor_type_name
        }
      }
      sponsor_stype {
        id
        sponsor_type_name
      }
    }
  `;

  const data = await graphqlRequest(query);

  // Função para agrupar sponsors por tipo (similar ao código original)
  const groupBySponsorType = (types, sponsors) => {
    return types.map((type) => {
      const filtered = sponsors.filter((sponsor) => {
        return sponsor.sponsor_type.sponsor_type_name.includes(type.sponsor_type_name);
      });
      return { type, data: [...filtered] };
    });
  };

  return groupBySponsorType(data.sponsor_stype, data.sponsor);
};

// Query customizada para GraphQL
export const customGraphQLQuery = async (query, variables = {}) => {
  return await graphqlRequest(query, variables);
};

/**
 * FUNÇÕES UTILITÁRIAS
 */

// Agrupar lineup por data
export const groupLineupByDate = (lineup) => {
  if (!Array.isArray(lineup)) return [];

  const groupedByDate = lineup.reduce((acc, item) => {
    const date = item.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  return Object.entries(groupedByDate).map(([date, items]) => ({
    date_event: date,
    lineUp: items.sort((a, b) => a.time?.localeCompare(b.time) || 0)
  }));
};

// Ordenar por horário
export const orderByTime = (arr) => {
  if (!Array.isArray(arr)) return [];

  return arr.sort((itemA, itemB) => {
    return itemA.time?.localeCompare(itemB.time) || 0;
  });
};

// Ordenar por status
export const orderByStatus = (arr) => {
  if (!Array.isArray(arr)) return [];

  const statusOrder = ['draft', 'published', 'archived'];

  return arr.sort((itemA, itemB) => {
    const statusAIndex = statusOrder.indexOf(itemA.status);
    const statusBIndex = statusOrder.indexOf(itemB.status);
    return (statusAIndex !== -1 ? statusAIndex : Infinity) - (statusBIndex !== -1 ? statusBIndex : Infinity);
  });
};

// Filtrar por status
export const filterByStatus = (arr, status) => {
  if (!Array.isArray(arr)) return [];
  return arr.filter(item => item.status === status);
};

/**
 * HOOK PERSONALIZADO PARA REACT
 */

// Hook para usar com React (requer useState e useEffect)
export const useApiData = () => {
  // Este hook pode ser usado em componentes React
  // Exemplo de implementação:

  /*
  import { useState, useEffect } from 'react';
  
  const useApiData = () => {
    const [lineup, setLineup] = useState([]);
    const [sponsors, setSponsors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadData = async () => {
      try {
        setLoading(true);
        const [lineupData, sponsorsData] = await Promise.all([
          getLineup(),
          getSponsors()
        ]);
        
        setLineup(lineupData);
        setSponsors(sponsorsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      loadData();
    }, []);

    return { lineup, sponsors, loading, error, refetch: loadData };
  };
  */

  return {
    getLineup,
    getSponsors,
    getPostBySlug,
    getAllPosts,
    customGraphQLQuery,
    groupLineupByDate,
    orderByTime,
    orderByStatus,
    filterByStatus
  };
};

/**
 * EXEMPLOS DE USO
 */

// Exemplo 1: Buscar e processar lineup completo
export const getProcessedLineup = async () => {
  try {
    const [dates, dataLineup, statusLineup] = await Promise.all([
      getLineupByDate(),
      getLineup(),
      getLineup()
    ]);

    const orderedLineup = orderByTime(dataLineup);
    const orderedByStatus = orderByStatus(statusLineup);
    const filteredLineup = filterByStatus(orderedByStatus, 'draft');

    const processedLineup = [];

    dates.forEach(({ date }) => {
      const dateItems = orderedLineup.filter(item => item.date?.includes(date));

      processedLineup.push({
        date_event: date,
        filteredLineup,
        lineUp: dateItems
      });
    });

    return processedLineup;
  } catch (error) {
    console.error('Erro ao processar lineup:', error);
    throw error;
  }
};

// Exemplo 2: Buscar dados completos da página inicial
export const getHomePageData = async () => {
  try {
    const [lineup, sponsors] = await Promise.all([
      getProcessedLineup(),
      getSponsors()
    ]);

    return { lineup, sponsors };
  } catch (error) {
    console.error('Erro ao buscar dados da página inicial:', error);
    throw error;
  }
};

// Exportação padrão com todas as funções
export default {
  // REST API
  getLineup,
  getLineupByDate,
  getLineupFiltered,
  getPostBySlug,
  getAllPosts,
  getPostsPaginated,

  // GraphQL
  getSponsors,
  customGraphQLQuery,

  // Utilitárias
  groupLineupByDate,
  orderByTime,
  orderByStatus,
  filterByStatus,

  // Processamento completo
  getProcessedLineup,
  getHomePageData,

  // Hook
  useApiData
};