import { Injectable } from '@angular/core';
import ForumCommentEntity from "../entities/forum-comment.entity";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor() { }
  async getForumPosts(): Promise<ForumCommentEntity[]> {
    const rawData = [
      {
        id: 1,
        'image': 'https://raw.githubusercontent.com/AplicacionesWeb-WX54/si730-WX54-Grupo1-Repository/main/assets/members-profile/nekolas-profile.png',
        'name': 'Nicola Hotman',
        'title': 'Networking Issue',
        'description': 'Hi everyone, we\'re experiencing some connectivity issues with our office network. Despite troubleshooting on our end, we\'re still unable to resolve the issue. Any suggestions on what might be causing this and how we can fix it?',
        'answers': [
          {
            'name':  'Yesi Hotman',
            'description': 'Have you checked the network cables and switches? Sometimes, a faulty cable or switch can cause connectivity issues. Also, ensure that the network drivers on your devices are up to date.'
          },
          {
            'name':  'Yesi Hotman',
            'description': 'Have you checked the network cables and switches? Sometimes, a faulty cable or switch can cause connectivity issues. Also, ensure that the network drivers on your devices are up to date.'
          },
          {
            'name':  'Yesi Hotman',
            'description': 'Have you checked the network cables and switches? Sometimes, a faulty cable or switch can cause connectivity issues. Also, ensure that the network drivers on your devices are up to date.'
          }
        ]
      },
      {
        id: 2,
        'image': 'https://raw.githubusercontent.com/AplicacionesWeb-WX54/si730-WX54-Grupo1-Repository/main/assets/members-profile/arigeimpleis.jpg',
        'name': 'Arian Rodriguez',
        'title': 'Compatibility Issues',
        'description': 'Hello tech community, we recently upgraded our operating system, and now we\'re encountering compatibility issues with some of our essential software applications. Has anyone else experienced similar issues, and if so, how did you address them?',
        'answers': [
          {
            'name':  'Yesi Hotman',
            'description': 'Have you checked the network cables and switches? Sometimes, a faulty cable or switch can cause connectivity issues. Also, ensure that the network drivers on your devices are up to date.'
          }
        ]
      },
      {
        id: 3,
        'image': 'https://raw.githubusercontent.com/AplicacionesWeb-WX54/si730-WX54-Grupo1-Repository/main/assets/members-profile/nekolas-profile.png',
        'name': 'Nicola Hotman',
        'title': 'Networking Issue',
        'description': 'Hi everyone, we\'re experiencing some connectivity issues with our office network. Despite troubleshooting on our end, we\'re still unable to resolve the issue. Any suggestions on what might be causing this and how we can fix it?',
        'answers': [
          {
            'name':  'Yesi Hotman',
            'description': 'Have you checked the network cables and switches? Sometimes, a faulty cable or switch can cause connectivity issues. Also, ensure that the network drivers on your devices are up to date.'
          }
        ]
      }
    ]
    return rawData.map(post => new ForumCommentEntity(
      post.id,
      post.image,
      post.name,
      post.title,
      post.description,
      post.answers
    ));
  }


}
