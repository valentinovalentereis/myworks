import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidoComponent } from '@app/pedidos/pedido';
import { ClienteService } from '@app/cliente/shared';
import { PedidoListaComponent } from '@app/pedidos/pedido-lista';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '@app/shared/shared.module';
import { PedidoService, PedidoItemService } from '@app/pedidos/shared';
import { NaturezaVendaService } from '@app/naturezavenda/shared/naturezavenda.service';
import { CondicaoPagamentoService } from '@app/condicaopagamento';
import { ProdutoService } from '@app/produtos/shared/produto.service';
import { PedidoItemComponent } from '@app/pedidos/pedido-item';

import { NgxCurrencyModule } from "ngx-currency";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ngx-currency/src/currency-mask.config";
import { PedidoEntregaComponent } from './pedido-entrega/pedido-entrega.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: false,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "",
  suffix: "",
  thousands: ".",
  nullable: true
};

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgSelectModule,
    SharedModule,
    PedidosRoutingModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot()
  ],
 
  declarations: [PedidoComponent, PedidoListaComponent, PedidoItemComponent,  PedidoEntregaComponent],
  providers: [ClienteService, PedidoService, PedidoItemService, NaturezaVendaService, CondicaoPagamentoService, ProdutoService,NgxCurrencyModule,{ provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }], 
  
})
export class PedidosModule { }
