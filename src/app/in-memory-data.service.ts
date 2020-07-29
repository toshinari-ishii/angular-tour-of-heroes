import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 1, name: '福士 義和' },
      { id: 2, name: '仲里 淳矢' },
      { id: 3, name: '高良真也' },
      { id: 4, name: '具志　直' },
      { id: 5, name: '新川 盛幸' },
      { id: 6, name: '徳元 拓真' },
      { id: 7, name: '金城　裕也' },
      { id: 8, name: '宮里 優希' },
      { id: 9, name: '大城 賢剛' },
      { id: 10, name:'石井 俊成' }
    ];
    return { members };
  }
}
