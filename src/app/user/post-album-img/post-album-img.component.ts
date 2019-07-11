import { Component, OnInit } from '@angular/core';
import {AlbumImg, Img} from '../ipost';
import {TokenService} from '../../auth/token.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostAlbumImgService} from '../../service/post-album-img.service';
import {UploadFileService} from '../../service/upload-file.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-post-album-img',
  templateUrl: './post-album-img.component.html',
  styleUrls: ['./post-album-img.component.scss']
})
export class PostAlbumImgComponent implements OnInit {
  album: AlbumImg;
  info: any;
  albumForm: FormGroup;
  constructor(
    private tokenService: TokenService,
    private fb: FormBuilder,
    private albumService: PostAlbumImgService,
    private uploadService: UploadFileService
  ) {
  }

  ngOnInit() {
    this.info = {
      token: this.tokenService.getToken(),
      username: this.tokenService.getUsername(),
      email: this.tokenService.getEmail(),
      authorities: this.tokenService.getAuthor()
    };
    this.albumForm = this.fb.group({
      title: ['', [Validators.required]],
    });
  }
  selectFile(event) {
    this.uploadService.selectFile(event);
  }

  onSubmit() {
    if (this.albumForm.valid) {
      const {value} = this.albumForm;
      const data = {
        ...this.album,
        ...value
      };
      this.albumService.creatBlogImg(data).subscribe(next => {
        console.log(next);
        this.uploadService.uploadFile(next).subscribe(() => {
            console.log('oke uploaded !!!');
            alert('Upload File Success');
          },
          (err: HttpErrorResponse) => {
            console.log(err.message);
          });
      }, error => console.log(error));
    }
  }
}
