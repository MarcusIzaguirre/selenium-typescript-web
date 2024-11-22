import { Builder, WebDriver } from 'selenium-webdriver';
import chrome from "selenium-webdriver/chrome";
import path from "path";

export class SetupPage {
  public static driver: WebDriver | null = null
  

  public static async setupDemoQA(): Promise<WebDriver> {
    if (!this.driver) {
      const options = new chrome.Options();
      options.addArguments("disable-infobars");
      options.addArguments("--incognito");
      //options.addArguments("--headless")
      options.addArguments("--window-size=1366,768")

      //  Setting the driver path, if necessary
      const chromeService = new chrome.ServiceBuilder(path.resolve("C:\\Users\\marcu\\Projetos\\Selenium-Typescript-Web\\node_modules\\.bin\\chromedriver131.exe"));

      // Initializing the webdriver
      this.driver = await new Builder()
                .forBrowser("chrome")
                .setChromeOptions(options)
                .setChromeService(chromeService)
                .build();
    
      await this.driver.get("https://demoqa.com/automation-practice-form");    
      
      await this.driver.manage().window().maximize();

      await this.driver.manage().setTimeouts({ implicit: 30000 });

    }
    return this.driver;
  }

  public static async closeBrowser(): Promise<void> {
    if (this.driver) {
      await this.driver.quit();
      this.driver = null;
    }
  }
}






// import { Builder, WebDriver } from "selenium-webdriver";
// import chrome, { Driver } from "selenium-webdriver/chrome";
// import path from "path";

// export async function setupBrowser(): Promise<WebDriver> {
//   const chromeOptions = new chrome.Options();
//   chromeOptions.addArguments(
//       "--disable-infobars",
//       "--disable-extensions",
//       "--start-maximized",
//       "--no-sandbox",
//       "--disable-dev-shm-usage",
//       "--allow-insecure-localhost",
//       "--allow-running-insecure-content",
//       "--disable-blink-features=AutomationControlled", // Remove a detecção de automação
//       "--ignore-certificate-errors",                  // Ignora erros de certificado
//       "--allow-insecure-localhost",                   // Permite conexões locais inseguras
//       "--allow-running-insecure-content",             // Permite carregamento de conteúdo inseguro
//       "--disable-site-isolation-trials",              // Resolve problemas de carregamento em algumas páginas
//       "--disable-gpu",                                 // Desativa a GPU, útil em máquinas virtuais
//       "--ignore-certificate-errors",                  // Ignora erros de SSL
//       "--allow-running-insecure-content",             // Permite conteúdo inseguro
//       "--disable-gpu",                                // Desativa a GPU
//       "--enable-logging",                             // Habilita logs detalhados
//       "--v=1"                                         // Define o nível de logs
//   );
//   chromeOptions.setChromeBinaryPath("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe");

//   const chromeService = new chrome.ServiceBuilder(
//       path.resolve("C:\\CapcuiaProject\\node_modules\\.bin\\chromedriver131.exe")
//   );

//   console.log("Inicializando o Chrome WebDriver...");
//   const driver = await new Builder()
//       .forBrowser("chrome")
//       .setChromeService(chromeService)
//       .setChromeOptions(chromeOptions)
//       .build();
//   console.log("Chrome WebDriver inicializado com sucesso.");
//   return driver;
// }


// export async function closeBrowser(driver: WebDriver): Promise<void> {
//     if (driver) {
//         console.log("Fechando o navegador...");
//         await driver.quit();
//         console.log("Navegador fechado.");
//     }
// }

// export async function openUrl(driver: WebDriver): Promise<void> {
//     console.log("Navegando para a URL...");
//     await driver.get("https://demoqa.com/automation-practice-form");

//     console.log("Aguardando o carregamento completo do DOM...");
//     await driver.wait(
//         async () => {
//             const readyState = await driver.executeScript("return document.readyState");
//             return readyState === "complete";
//         },
//         15000,
//         "A página não carregou completamente."
//     );
//     console.log("DOM carregado com sucesso.");
// }
