import { Injectable } from '@angular/core';

declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  messageGroup = {
    adDelete: 'your Ad was deleted successfully!'
  }
  constructor() { }

  showNotification(from: any, align: any, type: any, messageType: string) {
    // const type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];

    const color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      // icon: 'notifications',
      message: this.messageGroup[messageType]
    }, {
      type: type,
      timer: 20000,
      placement: {
        from: from,
        align: align
      },
      template: '<div data-notify="container" class="col-xs-11 col-sm-7 alert alert-{0} alert-with-icon" role="alert" style="top: 93px !important">' +
        '<button mat-raised-button type="button" aria-hidden="true" class="close" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
  }
}
