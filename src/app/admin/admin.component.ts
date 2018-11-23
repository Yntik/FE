import {Component, OnInit} from '@angular/core';
import { LocalStorageService } from '../service/local-storage-service' ;
import { Router } from '@angular/router';
import {ApiService} from '../service/api-service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  //styleUrls: ['./app.component.css']
  providers: [ApiService]
})
export class AdminComponent implements OnInit{

  data: string ;
  ranNum: number ;
  constructor(private apiService : ApiService, private storage: LocalStorageService, private router: Router) {
  }

  ngOnInit(): void {

    var token = this.storage.load() ;
    console.log('admin', token)
    if (token == null) {
      this.router.navigate(['/login']) ;
      return ;
    }
    this.apiService.checkToken(token).subscribe(res => {
      this.ranNum = Math.floor(Math.random() * 9) ;
      this.data = res.data ;
    },err => {
      this.router.navigate(['/login']) ;
    });
  }

  citation: string[] = [
    'Билл Гейтс: "Разбивая работу на множество отдельных участков и поручая их множеству отдельных работников, вы можете зайти так далеко, что уже никто не будет представлять себе процесс в целом и колеса начнут вращаться вхолостую"',
    'Йонас Риддерстрале: "Соедини технологии с доверием - и деньги окажутся совсем близко"',
    'Олдос Хаксли: "В эру передовых технологий неэффективность - страшный грех перед Господом"',
    'Ли Якокка: "Когда секретари бездельничают и занимаются болтовней - это явный признак того, что учреждение находится в состоянии загнивания"',
    'Альберт Эйнштейн: "Стремись не к тому, чтобы добиться успеха, а к тому, чтобы твоя жизнь имела смысл',
    'Аристотель Онассис: "У меня нет ни друзей, ни врагов - только конкуренты"',
    'Дэвид Причард: "Если я приму на работу кучу непригодных субьектов, это нанесет нам большой ущерб, потому что понадобится время, чтобы от них избавиться. Они начинают проникать в организацию и потом нанимают на работу таких же непригодных работников, как и они сами"',
    'Дэйвид Огилви: "Если в один прекрасный день вы обнаружите, что говорите одно и то же кардиналу и циркачу, для вас все закончено. К различным социальным, профессиональным, возрастным группам нужен различный подход"',
    'Дэйвид Огилви: "Почему одни предпочитают "Джэк Дэниэлc, а другие - "Оулд Крау" или "Тэйлор. Может быть, люди различают виски на вкус? Не смешите меня. Суть дела в том, что у каждой марки есть свой облик, и то, что нравится одним, не подходит для других. Люди выбирают не само виски, а его образ"',
    'Роберт Шемин: "Любое действие имеет свой риск и цену этого риска, точно также как и любое бездействие"',
    ] ;


}
