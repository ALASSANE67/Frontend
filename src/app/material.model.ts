import { NgModule } from "@angular/core";
import { MatCardModule} from "@angular/material/card";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatDialogModule} from "@angular/material/dialog";
import { MatButtonModule} from "@angular/material/button";
import { MatSelectModule} from "@angular/material/select";
import { MatIconModule} from "@angular/material/icon";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatSortModule} from "@angular/material/sort";
import { MatTableModule} from "@angular/material/table";
import { MatPaginatorModule} from "@angular/material/paginator";







@NgModule({
  exports: [
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatIconModule,
  MatFormFieldModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule
  ]
})
export class MaterialModel{

}
