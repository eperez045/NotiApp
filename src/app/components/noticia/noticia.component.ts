import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  fav: boolean = false;

  @Input() noticia: Article;
  @Input() enfav;


  constructor(private iab: InAppBrowser,
              private socialSharing: SocialSharing,
              private dataLocalService: DataLocalService) { }

  ngOnInit() {
    console.log('favoritos', this.enfav);
  }

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
    if (this.enfav){
      console.log('quito fav');
      this.dataLocalService.borrarNoticia(this.noticia);
      this.fav = !this.fav;
    }else{
      console.log('dio fav');
      this.dataLocalService.guardarNoticia(this.noticia);
      this.fav = !this.fav;
    }
  }
  

}
