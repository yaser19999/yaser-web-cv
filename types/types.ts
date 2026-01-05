

export interface Blogstype {
  _id: string;           // MongoDB ObjectId as string
  titleImge: string;
  title: string;
  content: JSON;//Record<string, any>; // because content is an object
  tags: [{
    value: string;
    label: string;
  }];        // tags is an array
  userId: string;  
  userEmail: string;      // User ID reference
  __v?: number;          // mongoose version key (optional)
}




export interface Tagtype {
  value: string,
  label: string
}

