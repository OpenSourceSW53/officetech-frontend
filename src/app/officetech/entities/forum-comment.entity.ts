class ForumCommentEntity {
  image: string;
  name: string;
  title: string;
  description: string;
  answers: any[];
  constructor(image: string, name: string, title: string, description: string, answers: any[]) {
    this.image = image;
    this.name = name;
    this.title = title;
    this.description = description;
    this.answers = answers;
  }
}

export default ForumCommentEntity;
