class ForumCommentEntity {
  image: string;
  name: string;
  title: string;
  description: string;
  constructor(image: string, name: string, title: string, description: string) {
    this.image = image;
    this.name = name;
    this.title = title;
    this.description = description;
  }
}

export default ForumCommentEntity;
