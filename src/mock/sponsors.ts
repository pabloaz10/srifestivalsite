// Mock data for sponsor types
export const mockSponsorTypes = [
  {
    id: "1",
    sponsor_type_name: "Patrocinador Diamante"
  },
  {
    id: "2", 
    sponsor_type_name: "Patrocinador Ouro"
  },
  {
    id: "3",
    sponsor_type_name: "Patrocinador Prata"
  },
  {
    id: "4",
    sponsor_type_name: "Apoiador Institucional"
  },
  {
    id: "5",
    sponsor_type_name: "Parceiro de Mídia"
  }
];

export const mockSponsors = [
  {
    id: "3",
    sponsor_name: "UNIPAR - Universidade Paranaense",
    sponsor_image: {
      id: "1127b5be-6453-4e88-9aa7-3095c227f151",
      title: "UNIPAR Logo"
    },
    sponsor_type: {
      id: "2",
      sponsor_type_name: "Patrocinador Ouro"
    },
    status: "published"
  },
  {
    id: "4", 
    sponsor_name: "SESI Paraná",
    sponsor_image: {
      id: "cfd3f9cd-a1bf-4d2f-9e13-7bc537133517",
      title: "SESI Logo"
    },
    sponsor_type: {
      id: "2",
      sponsor_type_name: "Patrocinador Ouro"
    },
    status: "published"
  },
  {
    id: "5", 
    sponsor_name: "SENAI Paraná",
    sponsor_image: {
      id: "d4ace4e3-476f-4050-ab45-ec3d0bb5c569",
      title: "SENAI Logo"
    },
    sponsor_type: {
      id: "2",
      sponsor_type_name: "Patrocinador Ouro"
    },
    status: "published"
  },
  {
    id: "6",
    sponsor_name: "NIT - Núcleo de Inovação Tecnológica",
    sponsor_image: {
      id: "3e24a049-b75c-426a-a0bb-0aee70499bb6",
      title: "NIT Logo"
    },
    sponsor_type: {
      id: "2",
      sponsor_type_name: "Patrocinador Ouro"
    },
    status: "published"
  },
  {
    id: "7",
    sponsor_name: "UEM - Universidade Estadual de Maringá",
    sponsor_image: {
      id: "f25e913e-86d3-4c67-b42b-2bded4067932",
      title: "UEM Logo"
    },
    sponsor_type: {
      id: "2",
      sponsor_type_name: "Patrocinador Ouro"
    },
    status: "published"
  },
  {
    id: "9",
    sponsor_name: "FAB LAB UEM",
    sponsor_image: {
      id: "c665a865-8f56-4bad-9cdf-838ebfe896d0",
      title: "FAB LAB UEM Logo"
    },
    sponsor_type: {
      id: "2",
      sponsor_type_name: "Patrocinador Ouro"
    },
    status: "published"
  },
  {
    id: "10",
    sponsor_name: "UMFG ",
    sponsor_image: {
      id: "c315ae25-4e06-4cec-9ce3-ef5dfb78fa1c",
      title: "UMFG Logo"
    },
    sponsor_type: {
      id: "2",
      sponsor_type_name: "Patrocinador Ouro"
    },
    status: "published"
  },
  {
    id: "11",
    sponsor_name: "Gênesis ",
    sponsor_image: {
      id: "286c26a4-d5c9-481a-be12-92fd432af5ad",
      title: "Gênesis Logo"
    },
    sponsor_type: {
      id: "2",
      sponsor_type_name: "Patrocinador Ouro"
    },
    status: "published"
  }
];

export default { sponsors: mockSponsors, sponsorTypes: mockSponsorTypes };