import mockLineup from './lineup';
import mockSponsorsData from './sponsors';
import mockOrganizers from './organizers';

// Types for the mock data service
interface IMockDataService {
  getLineup(): Promise<any[]>;
  getSponsors(): Promise<any[]>;
  getSponsorTypes(): Promise<any[]>;
  getOrganizers(): Promise<any[]>;
}

// Simulated API delay for realistic behavior
const simulateDelay = (ms: number = 300) => 
  new Promise(resolve => setTimeout(resolve, ms));

class MockDataService implements IMockDataService {
  
  /**
   * Get lineup/events data
   */
  async getLineup(): Promise<any[]> {
    await simulateDelay();
    console.log('📊 Mock: Carregando dados do lineup...', mockLineup.length, 'eventos');
    // Retornar todos os palestrantes, independente do status
    return mockLineup;
  }

  /**
   * Get sponsors data  
   */
  async getSponsors(): Promise<any[]> {
    await simulateDelay();
    console.log('📊 Mock: Carregando dados dos patrocinadores...', mockSponsorsData.sponsors.length, 'patrocinadores');
    return mockSponsorsData.sponsors.filter(sponsor => sponsor.status === 'published');
  }

  /**
   * Get sponsor types data
   */
  async getSponsorTypes(): Promise<any[]> {
    await simulateDelay();
    console.log('📊 Mock: Carregando tipos de patrocinadores...', mockSponsorsData.sponsorTypes.length, 'tipos');
    return mockSponsorsData.sponsorTypes;
  }

  /**
   * Get organizers data
   */
  async getOrganizers(): Promise<any[]> {
    await simulateDelay();
    console.log('📊 Mock: Carregando dados dos realizadores...', mockOrganizers.length, 'realizadores');
    return mockOrganizers.filter(organizer => organizer.status === 'published');
  }

  /**
   * Get all data at once (similar to the original API strategy)
   */
  async getAllData(): Promise<{
    lineup: any[],
    sponsors: any[],
    sponsorTypes: any[],
    organizers: any[]
  }> {
    console.log('📊 Mock: Carregando todos os dados...');
    
    try {
      const [lineup, sponsors, sponsorTypes, organizers] = await Promise.all([
        this.getLineup(),
        this.getSponsors(), 
        this.getSponsorTypes(),
        this.getOrganizers()
      ]);

      console.log('✅ Mock: Dados carregados com sucesso!', {
        lineup: lineup.length,
        sponsors: sponsors.length,
        sponsorTypes: sponsorTypes.length,
        organizers: organizers.length
      });

      return {
        lineup,
        sponsors,
        sponsorTypes,
        organizers
      };
    } catch (error) {
      console.error('❌ Mock: Erro ao carregar dados:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const mockDataService = new MockDataService();
export default mockDataService;