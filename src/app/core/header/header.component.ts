import { AuthService } from './../../auth/auth.service';
import { Component} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(
    private dataStorageService: DataStorageService,
    public authService: AuthService ) {}

  onSavedata() {
    this.dataStorageService.storeRecipes()
        .subscribe(
          (response: Response) => console.log(response)
        );
  }

  onFatchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
