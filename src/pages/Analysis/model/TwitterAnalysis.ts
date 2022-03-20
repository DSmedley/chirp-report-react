import {Background} from './Background';
import {Mention} from './Mention';
import {Hashtag} from './Hashtag';
import {Hour} from './Hour';
import {UserLink} from './UserLink';

export class TwitterAnalysis {
  constructor(
    public background: Background = new Background(),
    public mentions: Mention[] = [],
    public hashtags: Hashtag[] = [],
    public hours: Hour[] = [],
    public urls: UserLink[] = []
  ) {
  }
}