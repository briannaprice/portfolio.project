import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '.birthday'
})
export class BirthdayDirective implements OnInit{
  @Input() birthday: string;
  myBirthday: Date = new Date("01/08/2001")

  constructor() {
    }

    @HostBinding("class.missed") missed: boolean;
    @HostBinding("class.is-older") isOlder: boolean;

  ngOnInit(){
    let userBday = new Date(this.birthday);
    this.isOlder = userBday < this.myBirthday

    let now = new Date(Date.now());
    if(userBday.getMonth() < now.getMonth()){
      this.missed = true;
    }
    else if((userBday.getMonth() === now.getMonth()) && (userBday.getDate() < now.getDate())){
      this.missed = true;
    }
    else{
      this.missed = false;
    }

  }

}
