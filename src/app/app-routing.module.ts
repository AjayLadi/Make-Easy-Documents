import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PanServiceComponent } from './All_services/pan-service/pan-service.component';
import { TaxServiceComponent } from './All_services/tax-service/tax-service.component';
import { FoodServiceComponent } from './All_services/food-service/food-service.component';
import { DrivingLicenceComponent } from './All_services/driving-licence/driving-licence.component';
import { GadgetRajpatraComponent } from './All_services/gadget-rajpatra/gadget-rajpatra.component';
import { PassportComponent } from './All_services/passport/passport.component';
import { ProfessionalServiceComponent } from './All_services/professional-service/professional-service.component';
import { CompanyRegistrationComponent } from './All_services/company-registration/company-registration.component';
import { MahavitaranComponent } from './All_services/mahavitaran/mahavitaran.component';
import { KisanPointComponent } from './All_services/kisan-point/kisan-point.component';
import { TahsilSevaComponent } from './All_services/tahsil-seva/tahsil-seva.component';
import { ShopActComponent } from './All_services/shop-act/shop-act.component';
import { OtherComponent } from './All_services/other/other.component';
import { TredmarkComponent } from './All_services/tredmark/tredmark.component';
import { GstServiceComponent } from './All_services/gst-service/gst-service.component';
import { FoodRenewComponent } from './All_services/food-renew/food-renew.component';
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
import { Gstr9Component } from './All_services/gst-service/gstr-9/gstr-9.component';
import { GstUltComponent } from './All_services/gst-service/gst-ult/gst-ult.component';
import { GstReturnFilingComponent } from './All_services/gst-service/gst-return-filing/gst-return-filing.component';
import { GstNilReturnFilingComponent } from './All_services/gst-service/gst-nil-return-filing/gst-nil-return-filing.component';
import { GstRegistrationComponent } from './All_services/gst-service/gst-registration/gst-registration.component';
import { GstModificationComponent } from './All_services/gst-service/gst-modification/gst-modification.component';
import { GstEwayBillComponent } from './All_services/gst-service/gst-eway-bill/gst-eway-bill.component';
import { PfReturnFilingComponent } from './All_services/gst-service/payroll/pf-return-filing/pf-return-filing.component';
import { TaxPlanningComponent } from './All_services/gst-service/annual/tax-planning/tax-planning.component';
import { IncomeTaxReturnComponent } from './All_services/gst-service/annual/income-tax-return/income-tax-return.component';
import { OnlineAccountantComponent } from './All_services/gst-service/annual/online-accountant/online-accountant.component';
import { CsrComponent } from './All_services/gst-service/annual/csr/csr.component';
import { ProjectReportComponent } from './All_services/gst-service/annual/project-report/project-report.component';
import { IncorporationComponent } from './All_services/incorporation/incorporation.component';
import { ComplianceComponent } from './All_services/compliance/compliance.component';
import { BusinessRegistrationComponent } from './All_services/incorporation/business-registration/business-registration.component';
import { IndianRegistrationComponent } from './All_services/incorporation/indian-registration/indian-registration.component';
import { LlpRegistrationComponent } from './All_services/incorporation/llp-registration/llp-registration.component';
import { NidhiCompanyComponent } from './All_services/incorporation/nidhi-company/nidhi-company.component';
import { OnePersonComponent } from './All_services/incorporation/one-person/one-person.component';
import { PublicLimitedComponent } from './All_services/incorporation/public-limited/public-limited.component';
import { Section8Component } from './All_services/incorporation/section-8/section-8.component';
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
import { IncomeCertificateComponent } from './All_services/income-certificate/income-certificate.component';
import { LocalFoodComponent } from './All_services/food-service/local-food/local-food.component';
import { StateFoodComponent } from './All_services/food-service/state-food/state-food.component';
import { CentralFoodComponent } from './All_services/food-service/central-food/central-food.component';
import { FoodManufacturingComponent } from './All_services/food-manufacturing/food-manufacturing.component';
import { ShopComponent } from './All_services/shop-act/shop/shop.component';
import { IndividualPanComponent } from './All_services/pan-service/individual-pan/individual-pan.component';
import { CompanyPanComponent } from './All_services/pan-service/company-pan/company-pan.component';
import { ComRegiComponent } from './All_services/company-registration/com-regi/com-regi.component';
import { NamechangeGazetteComponent } from './All_services/gadget-rajpatra/namechange-gazette/namechange-gazette.component';
import { DobGazetteComponent } from './All_services/gadget-rajpatra/dob-gazette/dob-gazette.component';
import { ReligionGazetteComponent } from './All_services/gadget-rajpatra/religion-gazette/religion-gazette.component';
import { FreshPassportComponent } from './All_services/passport/fresh-passport/fresh-passport.component';
import { ReissuePassportComponent } from './All_services/passport/reissue-passport/reissue-passport.component';
import { ApplyItrComponent } from './All_services/itr-filing/apply-itr/apply-itr.component';
import { ApplyGstComponent } from './All_services/gst-service/gst-registration/apply-gst/apply-gst.component';
import { ItServicesComponent } from './All_services/it-services/it-services.component';
import { DomicileCertificateComponent } from './All_services/domicile-certificate/domicile-certificate.component';
import { UddyamAdharComponent } from './All_services/uddyam-adhar/uddyam-adhar.component';
import { VotterIdComponent } from './All_services/votter-id/votter-id.component';
import { ShiptingVotterComponent } from './All_services/votter-id/shipting-votter/shipting-votter.component';
import { NewVotterComponent } from './All_services/votter-id/new-votter/new-votter.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},

{
  path: 'home',
  component: HomeComponent,
  children: [
    {
      path: 'header',
      component: HeaderComponent
    },
    {
      path: 'footer',
      component: FooterComponent
    }
  ]
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'about',
  component: AboutComponent
},
{ path: 'contact', component: ContactComponent },
{ path: 'pan', component: PanServiceComponent },
{ path: 'tax', component: TaxServiceComponent },
{ path: 'food', component: FoodServiceComponent },
{ path: 'driving', component: DrivingLicenceComponent },
{ path: 'gadget', component: GadgetRajpatraComponent },
{ path: 'passport', component: PassportComponent },
{ path: 'professional', component: ProfessionalServiceComponent },
{ path: 'company', component: CompanyRegistrationComponent },
{ path: 'mahavitaran', component: MahavitaranComponent },
{ path: 'kissan', component: KisanPointComponent },
{ path: 'tashil', component: TahsilSevaComponent },
{ path: 'shop', component: ShopActComponent },
{ path: 'other', component: OtherComponent },
{ path: 'tred', component: TredmarkComponent },
{ path: 'gst', component: GstServiceComponent },
{ path: 'food_renew', component: FoodRenewComponent },
{ path: 'legal', component: LegalComponent },
{ path: 'import', component: InportExportComponent },
{ path: 'digital', component: DigitalSignatureComponent },
{ path: 'itr', component: ItrFilingComponent },
{ path: 'onlineLegalAdvice', component: OnlineLegalAdviceComponent },
{ path: 'legalNotice', component: LegalNoticeComponent },
{ path: 'devorce', component: DevorceAdviceComponent },
{ path: 'mahsul', component: MahsulComponent },
{ path: 'annual', component: AnnualComponent },
{ path: 'payroll', component: PayrollComponent },
{ path: 'gstr', component: Gstr9Component },
{ path: 'gst_ult', component: GstUltComponent },
{ path: 'gst_return', component: GstReturnFilingComponent },
{ path: 'gst_nill', component: GstNilReturnFilingComponent },
{ path: 'gst_registration', component: GstRegistrationComponent },
{ path: 'gst_modification', component: GstModificationComponent },
{ path: 'gst_e_way', component: GstEwayBillComponent },
{ path: 'pf_return', component: PfReturnFilingComponent },
{ path: 'tax_planing', component: TaxPlanningComponent },
{ path: 'income_tax', component: IncomeTaxReturnComponent },
{ path: 'online_ac', component: OnlineAccountantComponent },
{ path: 'csr', component: CsrComponent },
{ path: 'project_repo', component: ProjectReportComponent },
{ path: 'incorporation_pvt_ltd', component: IncorporationComponent },
{ path: 'compliance', component: ComplianceComponent },
{ path: 'businessRegistration', component: BusinessRegistrationComponent },
{ path: 'india', component: IndianRegistrationComponent },
{ path: 'llpRegistration', component: LlpRegistrationComponent },
{ path: 'nidhi', component: NidhiCompanyComponent },
{ path: 'onePerson', component: OnePersonComponent },
{ path: 'public', component: PublicLimitedComponent },
{ path: 'section', component: Section8Component },
{ path: 'derector_din', component: ComplianceComponent },
{ path: 'appointment_director', component: AppointmentDirectorComponent },
{ path: 'removal_director', component: RemovalDirectorComponent },
{ path: 'pvt_winding', component: PvtLtdWindingUpComponent },
{ path: 'llp_winding', component: LlpWindingUpComponent },
{ path: 'increase', component: IncreaseAuthorizedCapitalComponent },
{ path: 'registered_office', component: RegisterdOfficeChangeComponent },
{ path: 'change_company', component: ChangeCompanyNameComponent },
{ path: 'MOA_pvt_ltd', component: MovPvtLtdComponent },
{ path: 'MOA_public_ltd', component: MovPublicLtdComponent },
{ path: 'MOA_section8', component: MovSection8Component },
{ path: 'share_tranfer', component: ShareTranferComponent },
{ path: 'jansamarth', component: JansamarthRegistrationComponent },
{ path: 'credit_analysis', component: CreditManagementAnalysisComponent },
{ path: 'serv', component: AllservicePageComponent },
{ path: 'reset_password', component: ResetPassComponent },
{ path: 'create_account', component: CreateAcComponent },
{ path: 'income_certificate', component: IncomeCertificateComponent },
{ path: 'admin', component: DashboardComponent },
{ path: 'food_manufacturing', component: FoodManufacturingComponent },

{ path: 'learning', component: LearningDLComponent },
{ path: 'permanant', component: PermanantDLComponent },
{ path: 'renew', component: RenewDLComponent },

{ path: 'local_food', component: LocalFoodComponent },
{ path: 'state_food', component: StateFoodComponent },
{ path: 'central_food', component: CentralFoodComponent },
{ path: 'shop_act', component: ShopComponent },
{path: 'individual_pan', component:IndividualPanComponent},
{path:'company_pan',component:CompanyPanComponent},
{path:'company_registration',component:ComRegiComponent},
{path: 'name_change_gazette', component:NamechangeGazetteComponent},
{path:'dob_change_gazette',component:DobGazetteComponent},
{path:'religion_change_gazette',component:ReligionGazetteComponent},
{path:'fress_pass',component:FreshPassportComponent},
{path:'reissue_pass',component:ReissuePassportComponent},
{path:'apply_itr',component:ApplyItrComponent},
{path:'apply_gst',component:ApplyGstComponent},
{path:'it_service',component:ItServicesComponent},
{path:'domicile',component:DomicileCertificateComponent},
{path:'uddyam',component:UddyamAdharComponent},
{path:'voter_id',component:VotterIdComponent},
{path:'new_votter',component:NewVotterComponent},
{path:'shipt_votter',component:ShiptingVotterComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
