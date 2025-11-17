import { Routes } from '@angular/router';
import { Home } from './component/shared/home/home';
import { PlistBlog } from './component/shared/feature/blog/plist/plist';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: PlistBlog },
];
