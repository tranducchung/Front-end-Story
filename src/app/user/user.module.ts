import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BlogComponent} from './blog/blog.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';
import {PostBlogComponent} from './post-blog/post-blog.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { BlogShareComponent } from './blog-share/blog-share.component';
import { FormUploadComponent } from './form-upload/form-upload.component';
import { NotificationComponent } from './notification/notification.component';
import { DetailBlogShareComponent } from './detail-blog-share/detail-blog-share.component';
import {ExportAsModule} from 'ngx-export-as';
import {NgxLinkifyjsModule} from 'ngx-linkifyjs';
import {JwSocialButtonsModule} from 'jw-angular-social-buttons';

@NgModule({
  declarations: [
    UserComponent,
    BlogComponent,
    EditBlogComponent,
    PostBlogComponent,
    DetailBlogComponent,
    BlogManagementComponent,
    BlogShareComponent,
    FormUploadComponent,
    NotificationComponent,
    DetailBlogShareComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule,
    ExportAsModule,
    NgxLinkifyjsModule,
    JwSocialButtonsModule
  ],
  exports: [UserComponent, DetailBlogComponent]
})

export class UserModule {
}
