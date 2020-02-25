export class Movie {
  constructor(
		public key: string,
		public name: string,
		public description: string,
		public genres: any,
		public rate: number,
		public length: any,
		public img: string,
		public id?: number
  ) {}
}
