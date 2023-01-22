export interface Activity {
  id : number;
  attributes:{
    title: string;
    subtitle: string | null;
    description: string;
    date: Date;
    // showInGallery : string;
    picture?: {data : {attributes: { url : string}}};
    pictures?: string;
    // categories: {data: ActivityCategory[];}
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  }
}
