import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { CompanyRegistrationComponent } from './All_services/company-registration/company-registration.component';
import { DrivingLicenceComponent } from './All_services/driving-licence/driving-licence.component';
import { FoodRenewComponent } from './All_services/food-renew/food-renew.component';
import { FoodServiceComponent } from './All_services/food-service/food-service.component';
import { GadgetRajpatraComponent } from './All_services/gadget-rajpatra/gadget-rajpatra.component';
import { GstServiceComponent } from './All_services/gst-service/gst-service.component';
import { KisanPointComponent } from './All_services/kisan-point/kisan-point.component';
import { MahavitaranComponent } from './All_services/mahavitaran/mahavitaran.component';
import { OtherComponent } from './All_services/other/other.component';
import { PassportComponent } from './All_services/passport/passport.component';
import { PanServiceComponent } from './All_services/pan-service/pan-service.component';
import { ProfessionalServiceComponent } from './All_services/professional-service/professional-service.component';
import { ShopActComponent } from './All_services/shop-act/shop-act.component';
import { TahsilSevaComponent } from './All_services/tahsil-seva/tahsil-seva.component';
import { TaxServiceComponent } from './All_services/tax-service/tax-service.component';
import { TicketBookingComponent } from './All_services/ticket-booking/ticket-booking.component';
import { TredmarkComponent } from './All_services/tredmark/tredmark.component';
import { LegalComponent } from './All_services/legal/legal.component';
import { InportExportComponent } from './All_services/inport-export/inport-export.component';
import { DigitalSignatureComponent } from './All_services/digital-signature/digital-signature.component';
import { ItrFilingComponent } from './All_services/itr-filing/itr-filing.component';
import { OnlineLegalAdviceComponent } from './All_services/legal/online-legal-advice/online-legal-advice.component';
import { LegalNoticeComponent } from './All_services/legal/legal-notice/legal-notice.component';
import { DevorceAdviceComponent } from './All_services/legal/devorce-advice/devorce-advice.component';
import { MahsulComponent } from './All_services/legal/mahsul/mahsul.component';
import { AnnualComponent } from './All_services/gst-service/annual/annual.component';
import { PayrollComponent } from './All_services/gst-service/payroll/payroll.component';
import { GstRegistrationComponent } from './All_services/gst-service/gst-registration/gst-registration.component';
import { GstReturnFilingComponent } from './All_services/gst-service/gst-return-filing/gst-return-filing.component';
import { GstNilReturnFilingComponent } from './All_services/gst-service/gst-nil-return-filing/gst-nil-return-filing.component';
import { GstModificationComponent } from './All_services/gst-service/gst-modification/gst-modification.component';
import { Gstr9Component } from './All_services/gst-service/gstr-9/gstr-9.component';
import { GstUltComponent } from './All_services/gst-service/gst-ult/gst-ult.component';
import { GstEwayBillComponent } from './All_services/gst-service/gst-eway-bill/gst-eway-bill.component';
import { PfReturnFilingComponent } from './All_services/gst-service/payroll/pf-return-filing/pf-return-filing.component';
import { TaxPlanningComponent } from './All_services/gst-service/annual/tax-planning/tax-planning.component';
import { IncomeTaxReturnComponent } from './All_services/gst-service/annual/income-tax-return/income-tax-return.component';
import { OnlineAccountantComponent } from './All_services/gst-service/annual/online-accountant/online-accountant.component';
import { CsrComponent } from './All_services/gst-service/annual/csr/csr.component';
import { ProjectReportComponent } from './All_services/gst-service/annual/project-report/project-report.component';
import { IncorporationComponent } from './All_services/incorporation/incorporation.component';
import { ComplianceComponent } from './All_services/compliance/compliance.component';
import { LlpRegistrationComponent } from './All_services/incorporation/llp-registration/llp-registration.component';
import { OnePersonComponent } from './All_services/incorporation/one-person/one-person.component';
import { PublicLimitedComponent } from './All_services/incorporation/public-limited/public-limited.component';
import { Section8Component } from './All_services/incorporation/section-8/section-8.component';
import { BusinessRegistrationComponent } from './All_services/incorporation/business-registration/business-registration.component';
import { NidhiCompanyComponent } from './All_services/incorporation/nidhi-company/nidhi-company.component';
import { IndianRegistrationComponent } from './All_services/incorporation/indian-registration/indian-registration.component';
import { AppointmentDirectorComponent } from './All_services/compliance/appointment-director/appointment-director.component';
import { RemovalDirectorComponent } from './All_services/compliance/removal-director/removal-director.component';
import { PvtLtdWindingUpComponent } from './All_services/compliance/pvt-ltd-winding-up/pvt-ltd-winding-up.component';
import { LlpWindingUpComponent } from './All_services/compliance/llp-winding-up/llp-winding-up.component';
import { IncreaseAuthorizedCapitalComponent } from './All_services/compliance/increase-authorized-capital/increase-authorized-capital.component';
import { RegisterdOfficeChangeComponent } from './All_services/compliance/registerd-office-change/registerd-office-change.component';
import { ChangeCompanyNameComponent } from './All_services/compliance/change-company-name/change-company-name.component';
import { MovPvtLtdComponent } from './All_services/compliance/mov-pvt-ltd/mov-pvt-ltd.component';
import { MovPublicLtdComponent } from './All_services/compliance/mov-public-ltd/mov-public-ltd.component';
import { MovSection8Component } from './All_services/compliance/mov-section-8/mov-section-8.component';
import { ShareTranferComponent } from './All_services/compliance/share-tranfer/share-tranfer.component';
import { JansamarthRegistrationComponent } from './All_services/compliance/jansamarth-registration/jansamarth-registration.component';
import { CreditManagementAnalysisComponent } from './All_services/compliance/credit-management-analysis/credit-management-analysis.component';
import { AllservicePageComponent } from './All_services/allservice-page/allservice-page.component';
import { ResetPassComponent } from './login/reset-pass/reset-pass.component';
import { CreateAcComponent } from './login/create-ac/create-ac.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningDLComponent } from './All_services/driving-licence/learning-dl/learning-dl.component';
import { PermanantDLComponent } from './All_services/driving-licence/permanant-dl/permanant-dl.component';
import { RenewDLComponent } from './All_services/driving-licence/renew-dl/renew-dl.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IncomeCertificateComponent } from './All_services/income-certificate/income-certificate.component';
import { LocalFoodComponent } from './All_services/food-service/local-food/local-food.component';
import { StateFoodComponent } from './All_services/food-service/state-food/state-food.component';
import { CentralFoodComponent } from './All_services/food-service/central-food/central-food.component';
import { FoodManufacturingComponent } from './All_services/food-manufacturing/food-manufacturing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    CompanyRegistrationComponent,
    DrivingLicenceComponent,
    FoodRenewComponent,
    FoodServiceComponent,
    GadgetRajpatraComponent,
    GstServiceComponent,
    KisanPointComponent,
    MahavitaranComponent,
    OtherComponent,
    PassportComponent,
    PanServiceComponent,
    ProfessionalServiceComponent,
    ShopActComponent,
    TahsilSevaComponent,
    TaxServiceComponent,
    TicketBookingComponent,
    TredmarkComponent,
    LegalComponent,
    InportExportComponent,
    DigitalSignatureComponent,
    ItrFilingComponent,
    OnlineLegalAdviceComponent,
    LegalNoticeComponent,
    DevorceAdviceComponent,
    MahsulComponent,
    AnnualComponent,
    PayrollComponent,
    GstRegistrationComponent,
    GstReturnFilingComponent,
    GstNilReturnFilingComponent,
    GstModificationComponent,
    Gstr9Component,
    GstUltComponent,
    GstEwayBillComponent,
    PfReturnFilingComponent,
    TaxPlanningComponent,
    IncomeTaxReturnComponent,
    OnlineAccountantComponent,
    CsrComponent,
    ProjectReportComponent,
    IncorporationComponent,
    ComplianceComponent,
    LlpRegistrationComponent,
    OnePersonComponent,
    PublicLimitedComponent,
    Section8Component,
    BusinessRegistrationComponent,
    NidhiCompanyComponent,
    IndianRegistrationComponent,
    AppointmentDirectorComponent,
    RemovalDirectorComponent,
    PvtLtdWindingUpComponent,
    LlpWindingUpComponent,
    IncreaseAuthorizedCapitalComponent,
    RegisterdOfficeChangeComponent,
    ChangeCompanyNameComponent,
    MovPvtLtdComponent,
    MovPublicLtdComponent,
    MovSection8Component,
    ShareTranferComponent,
    JansamarthRegistrationComponent,
    CreditManagementAnalysisComponent,
    AllservicePageComponent,
    ResetPassComponent,
    CreateAcComponent,
    DashboardComponent,
    LearningDLComponent,
    PermanantDLComponent,
    RenewDLComponent,
    IncomeCertificateComponent,
    LocalFoodComponent,
    StateFoodComponent,
    CentralFoodComponent,
    FoodManufacturingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
