export class Movie {
  constructor(
		public id: number,
		public key: string,
		public name: string,
		public description: string,
		public genres: any,
		public rate: string,
		public length: string,
		public img: string
  ) {}
}
