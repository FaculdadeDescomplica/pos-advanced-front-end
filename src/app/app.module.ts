import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { ListarComponent } from './pages/listar/listar.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { PrivadoComponent } from './pages/privado/privado.component';
import { DetalheComponent } from './pages/detalhe/detalhe.component';
import { ParametroComponent } from './pages/parametro/parametro.component';
import { ListaSimplesComponent } from './pages/lista-simples/lista-simples.component';

import { SubrouteComponent } from './pages/subroute/subroute.component';
import { Page1Component } from './pages/subroute/page1/page1.component';
import { Page2Component } from './pages/subroute/page2/page2.component';

import { EditarComponent } from './pages/editar/editar.component';
import { NgxMaskModule } from 'ngx-mask';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DialogContentExampleDialog, ModalComponent } from './pages/modal/modal.component';


// *************** POPUPS & MODALS ***************
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TableComponent } from './components/table/table.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CadastroComponent,
    LoginComponent,
    ListarComponent,
    ManipulandoJsonComponent,
    PrivadoComponent,
    DetalheComponent,
    ParametroComponent,
    SubrouteComponent,
    Page1Component,
    Page2Component,
    DialogContentExampleDialog,
    ListaSimplesComponent,
    EditarComponent,
    ModalComponent,
    TableComponent,
    UserInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTooltipModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxMaskModule.forRoot({
			validation: true,
		}),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
