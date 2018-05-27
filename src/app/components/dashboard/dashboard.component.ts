import { Component, OnInit } from '@angular/core';
import { WidgetsAPIService } from '../../services/widgetsAPI.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  enviromentsConfig = {};
  widgets = {
    enviroments: [],
  };

  constructor(private widgetsAPI: WidgetsAPIService) { }

  ngOnInit() {
    this.enviromentsConfig = this.getEnviromentsConfig();

    this.widgetsAPI.getEnviroments()
    .subscribe(res => {
      const enviroments = res;
      for (const key of Object.keys(enviroments)) {
        this.widgets.enviroments.push(this.normalizeEnviromentData(key, enviroments[key]));
      }
    }, err => {
      console.log(err);
    });
  }

  private normalizeEnviromentData(enviromentKey, enviromentData) {
    const template = this.enviromentsConfig[enviromentKey];

    // Normalize Types object
    for (const key of Object.keys(enviromentData.Types)) {
      template.Types[key].Value = enviromentData.Types[key];
    }

    // Normalize Severities object
    template.Severities = enviromentData.Severities;

    // Normalize Sources object
    for (const key of Object.keys(enviromentData.Sources)) {
      template.Sources[key].Value = enviromentData.Sources[key];
    }

    return template;
  }

  private getEnviromentsConfig() {
    return {
      ClearWeb: {
        Name: 'CLEAR WEB',
        Icon: '/assets/clear_web.png',
        Types: {
          AttackIndication: {
            Title: 'ATTACK INDICATION',
            Icon: '/assets/attack.svg',
            IconSize: '24px',
            Value: -1,
          },
          DataLeakage: {
            Title: 'DATA LEAKAGE',
            Icon: '/assets/data_leak.svg',
            IconSize: '20px',
            Value: -1,
          },
          Phishing: {
            Title: 'PHISHING',
            Icon: '/assets/phishing.svg',
            IconSize: '22px',
            Value: -1,
          },
          BrandSecurity: {
            Title: 'BRAND SECURITY',
            Icon: '/assets/brand_security.svg',
            IconSize: '21px',
            Value: -1,
          },
          ExploitableData: {
            Title: 'EXPLOITABLE DATA&trade;',
            Icon: '/assets/exploitable_data.svg',
            IconSize: '21px',
            Value: -1,
          },
          vip: {
            Title: 'VIP',
            Icon: '/assets/vip.svg',
            IconSize: '21px',
            Value: -1,
          },
        },
        Sources: {
          ApplicationStores: {
            Title: 'APPLICATION STORES',
            Value: 0,
          },
          HackingForums: {
            Title: 'HACKING FORMUS',
            Value: 0,
          },
          SocialMedia: {
            Title: 'SOCIAL MEDIA',
            Value: 0,
          },
          PasteSites: {
            Title: 'PASTE SITES',
            Value: 0,
          },
          Others: {
            Title: 'OTHERS',
            Value: 0,
          },
        },
      },
      DarkWeb: {
        Name: 'DARK WEB',
        Icon: '/assets/dark_web.png',
        Types: {
          AttackIndication: {
            Title: 'ATTACK INDICATION',
            Icon: '/assets/attack.svg',
            IconSize: '24px',
            Value: -1,
          },
          DataLeakage: {
            Title: 'DATA LEAKAGE',
            Icon: '/assets/data_leak.svg',
            IconSize: '20px',
            Value: -1,
          },
          Phishing: {
            Title: 'PHISHING',
            Icon: '/assets/phishing.svg',
            IconSize: '22px',
            Value: -1,
          },
          BrandSecurity: {
            Title: 'BRAND SECURITY',
            Icon: '/assets/brand_security.svg',
            IconSize: '21px',
            Value: -1,
          },
          ExploitableData: {
            Title: 'EXPLOITABLE DATA&trade;',
            Icon: '/assets/exploitable_data.svg',
            IconSize: '21px',
            Value: -1,
          },
          vip: {
            Title: 'VIP',
            Icon: '/assets/vip.svg',
            IconSize: '21px',
            Value: -1,
          },
        },
        Sources: {
          BlackMarkets: {
            Title: 'BLACK MARKETS',
            Value: 0,
          },
          HackingForums: {
            Title: 'HACKING FORMUS',
            Value: 0,
          },
          PasteSites: {
            Title: 'PASTE SITES',
            Value: 0,
          },
          Others: {
            Title: 'OTHERS',
            Value: 0,
          },
        },
      },
    };
  }
}
