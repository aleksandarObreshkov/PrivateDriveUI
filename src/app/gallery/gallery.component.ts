import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DialogComponent } from '../dialog/dialog.component';
import { FetchService } from '../fetch.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit{

  constructor(public dialog: MatDialog, private fetchService: FetchService, private domSanitizer: DomSanitizer) {}

  images = [];
  imageCount : any;

  ngOnInit(): void {
    this.fetchService.getImageCount().subscribe(e => {
      this.imageCount = Number.parseInt(e.toString());
      for(var i =0; i<this.imageCount; i++){
        this.fetchService.getImage(i).subscribe(element =>{
          this.images.push(this.parseBuffer(element));
        });
      };
    });
  }


  parseBuffer(buffer: ArrayBuffer) : SafeUrl{
    let typedArray = new Uint8Array(buffer);
    const string_char = typedArray.reduce((data, byte)=> {
      return data + String.fromCharCode(byte);
      }, '');
    let base64String = btoa(string_char);
    return this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg; base64,'+base64String)
  }

  toggle(url: SafeUrl){
    this.dialog.open(DialogComponent, {
      data: url
    });
  }

  

  imageUrls = ["https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1584714268709-c3dd9c92b378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1227&q=80",
  "https://images.unsplash.com/photo-1638325372913-b24d33adce46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
  "https://lh3.googleusercontent.com/6ASgMr9NA3A2Lrw4Avt3agunY5PI7lpDRs7mRDTXymSnYjKHPXictDeEvg1lVIAW9Bqcs1gK4PuL-u1En8pMdh-se2gsBn4bdQylhconDvHcncJrGoDRy-D3UDQTDoe7YZh5O1D4_y6f-8223Xnd23RicUPZ0baUk9zhMc6P9xFWCGSNBStsXr_W18wJ91_PG4wx6z3_idLCq5te_eyCLStcVViyuaG63tYkvh5N8kypPZnTreGQOBcWqRcTCnOMEwSMxvSGJMbjwUB7iFzPUNX5IKaPD8rFJnHGP580GZWTQwMXeWI-dVwCMwUMrV6NKpMsFdONGVhktTtOQByO78vVPvNXDEZOtkQV3o6AGrqK1-ZOwfjBcG957qQFO2ALdeVoYBb8-a8R2fojtK2EsCdUdC_OnU4XCnZVdFeFPnxnLgxzv_NwHPraSQycftt-XX5L9JwchXNOTlg7g1ENJTsklhs0b9PnzGJrJBdog6aFTUntE6WoPUQ4ASWqJVEplQaggILtR7XEl3DTfVj8EOYOkzM6XEJtMAqBLz2WVRe_eurpbIfLUi1yeZOPPGx9oVFXKrX6x84Y0l86eJs5JcqUe7XY8VR0q4196fG7traVuBG685OED8Gs1W__lKhDs_hs_D44JzR0KeHGz0_9qj8GiZImk13bbWZgk8Q7WX5F0gRElUx_ft87ufh4yOG2ch1wpCzr3R2P5rIa1HCKGJaBdQ=w1262-h948-no?authuser=0",
  "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
  "https://images.unsplash.com/photo-1639819253484-f6082608890a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
  "https://images.unsplash.com/photo-1639779914870-766bb3651a77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1639755507638-e34150b56db2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1639562954926-131acb2c091e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://lh3.googleusercontent.com/W8pfJwOrG3uD44QbfV1k6xkHxKwFJHPNWYx-YeSoNBZRmJRVycO0Ww87t23gTgiGanqCmSHUbivvP3LKUuCd0KQdNP-nZwg7F0iSJ7sLsZjaK-2LCd1uYZVXH831jTExPqHrpivWA85-U7wOHV45bXTBq_st2PfrC89zbzvp6zsr2mxKtJiHxpLILNDh3kkuNN2ZhQ8OqpoKAzRJRrBImae-jILLmfNw2kPcauaZeelNWgezObZ_U7XuVApbySM4Tolv1HyoDVvaUdX6gox-96pNd3aUCbiHsSo3bPk73J9EDQk93D9NM4gFRPxtXuATe7LF8yeWIcx1uhdkGMm2MF68UV64jD3-h9pGQLXGPdrMEkHlUMp3d3Inq1a4ZhBKJJRLj1plaEFH_u6jBtzGtogTbzuZOAzSyBFuoVTnannreqSjDI2AnoN09rY4NX8Zk3yPGyjl2olGWOfhcbDd3SyRhkl40jhdGExChp33ApmOndULL-bE2GG4MeiEfU6LJa2NC7gVSaFMA-LRSEncdE0G48NxQ_P4PSC7S09KiL1mp0hE35Xb1eODr3b6TaL_uLU7YDbmvxbEwHjAKgEwDjEo_ANBHArUgQR4NgjG4zyDJGWOTdRSOMZT1ygSCmy8tmaOygR-DeN5aT3_oSSP6eGRAgRCMDuHnP60MF6JBP4Hd4CJ7Bpx1bj67iR0WZQy5YT5Q7ESG-EGg9vYqFwRxSA6Ow=w1848-h835-no?authuser=0"];

}