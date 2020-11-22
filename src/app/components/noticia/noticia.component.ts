import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  fav: boolean = false;

  @Input() noticia: Article;

  constructor(private iab: InAppBrowser,
              private socialSharing: SocialSharing) { }

  ngOnInit() {}

  abrirNoticia(){
    console.log('Noticia', this.noticia.url);
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  compartir(){
    this.socialSharing.share(
      this.noticia.title,
      this.noticia.source.name,
      '',
      this.noticia.url
    );
  }

  darFav(){
    console.log('dio fav');
    this.fav = !this.fav;
  }

}
