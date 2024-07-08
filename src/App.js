
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AnaSayfa from './anasayfa';
import Iletisim from './iletisim';
import Hakkimizda from './hakkimizda';
import Teraziler from './teraziler';
import Etiketler from './etiketler';
import Streçler from './strecler'
import Basküller from './baskuller';
import VincKantarlari from './vincKantarlari';
import BarkodluTeraziler from './BarkodluTeraziler';
import FiyatHesaplamaliTeraziler from './FiyatHesaplamaliTeraziler';
import TartımTeraziler from './TartımTeraziler';
import SayiciTeraziler from './SayiciTeraziler';
import HassasTartim from './HassasTartim';
import StandartBaskuller from './StandartBaskuller';
import EndustriyelBaskuller from './EndustriyelBaskuller';
import TranspaletBaskuller from './TranspaletBaskuller';
import BarkodluCas from './BarkodluCas';
import BarkodluMettler from './BarkodluMettler';
import BarkodluDensi from './BarkodluDensi';
import FiyatHesaplamaliCas from './FiyatHesaplamaliCas';
import FiyatHesaplamaliDensi from './FiyatHesaplamaliDensi';
import FiyatHesaplamaliHana from './FiyatHesaplamaliHana';
import FiyatHesaplamaliTem from './FiyatHesaplamaliTem';
import TartimHana from './TartimHana';
import TartimNeck from './TartimNeck';
import TartimCas from './TartimCas';
import TartimTem from './TartimTem';
import TartimMurbay from './TartimMurbay';
import BarkodluCasCl8000 from './BarkodluCasCl8000';
import BarkodluCasCl3000 from './BarkodluCasCl3000';
import BarkodluMettlerBCom from './BarkodluMettlerBCom';
import BarkodluBPlusT2M from './BarkodluBPlusT2M';
import BarkodluBPlusH2L from './BarkodluMettlerBPlusH2L';
import BarkodluMettlerFreshBaseU2 from './BarkodluMettlerFreshBaseU2';
import BarkodluDensiRLS1000 from './BarkodluDensiRLS1000';
import FiyatHesaplamaliHS5600 from './FiyatHesaplamaliHS5600';
import FiyatHesaplamaliCasPR2B from './FiyatHesaplamaliCasPR2B';
import FiyatHesaplamaliCasERJR from './FiyatHesaplamaliCasERJR';
import FiyatHesaplamaliDensiPc100 from './FiyatHesaplamaliDensiPc100';
import FiyatHesaplamaliTemEgeLed from './FiyatHesaplamaliTemEgeLed';
import FiyatHesaplamaliTemAtaLed from './FiyatHesaplamalıTemAtaLed';
import TartimHanaHS2000 from './TartimHanaHS2000';
import TartimHanaHS1000 from './TartimHanaHS1000';
import TartimNeckJCSB from './TartimNeckJCSB';
import TartimCasSW2 from './TartimCasSW2';
import TartimCasSw2SuKorumalı from './TartimCasSw2SuKorumalı';
import TartimTemAtaTB from './TartimTemAtaTB';
import TartimTemEko from './TartimTemEko';
import TartimTemTPTIP67 from './TartimTemTPTIP67';
import TartimTem28x35 from './TartimTem28x35';
import TartimMurbaySelesAGTSuKorumalı from './TartimMurbaySelesAGTSuKorumalı';
import TartimMurbaySelesS29 from './TartimMurbaySelesS29';
import TartimMurbaySelesT28 from './TartimMurbaySelesT28';
import TartimDikomsan from './TartimDikomsan';
import TartimDikomsanQWM from './TartimDikomsanQWM';
import SayiciTem from './SayiciTem';
import SayiciHana from './SayiciHana';
import SayiciDikomsan from './SayiciDikomsan';
import HassasTartimDikomsan from './HassasTartimDikomsan';
import HassasTartimMurbay from './HassasTartimMurbay';
import SayiciTemGTC from './SayiciTemGTC';
import SayiciHanaHS7500 from './SayiciHanaHS7500';
import SayiciDikomsanJCSA from './SayiciDikomsanJCSA';
import SayiciDikomsanQC from './SayiciDikomsanQC';
import HassasTartimDikomsanKDTBC from './HassasTartimDikomsanKDTBC';
import HassasTartimDikomsanHCTHB from './HassasTartimDikomsanHCTHB';
import HassasTartimDikomsanHTSH from './HassasTartimDikomsanHTSH';
import HassasTartimMurbaySelesAndGFGX from './HassasTartimMurbaySelesAndGFGX';
import HassasTartimMurbaySelesNHB from './HassasTartimMurbaySelesNHB';
import PaslanmazBaskuller from './PaslanmazBaskuller';
import TranspaletTem from './TranspaletTem';
import TranspaletHana from './TranspaletHana';
import StandartBaskulTem from './StandartBaskulTem';
import EndustriyelBaskulTem from './EndustriyelBaskulTem';
import PaslanmazBaskulMurbay from './PaslanmazBaskulMurbay';
import VincCas from './VincCas';
import VincTem from './VincTem';
import VincMurbay from './VincMurbay';
import VincCasIE1700 from './VincCasIE1700';
import VincCasCasTon2Plus from './VincCasCasTon2Plus';
import VincTemSHWD from './VincTemSHWD';
import VincTemEko from './VincTemEko';
import VincTemSHSerisi from './VincTemSHSerisi';
import VincMurbaySelesOCSS1 from './VincMurbaySelesOCSS1';
import StandartBaskulTemTebMeb from './StandartBaskulTemTebMeb';
import EndustriyelBaskullerTemMLB1001 from './EndustriyelBaskullerTemMLB1001';
import TranspaletTemOnaylı from './TranspaletTemOnaylı';
import TranspaletHanaHS2600WLCD from './TranspaletHanaHS2600WLCD';
import PaslanmazBaskulMurbaySelesBWS from './PaslanmazBaskulMurbaySelesBWS';
import PaslanmazBaskulMurbaySelesXK3108B from './PaslanmazBaskulMurbaySelesXK3108B';
import EndustriyelMalzemeler from './EndustriyelMalzemeler';
import Loadcell from './Loadcell';
import LoadcellDensi from './LoadcellDensi';
import LoadcellDensiTEDEA1260 from './LoadcellDensiTEDEA1260';
import LoadcellDensiTEDEA1263 from './LoadcellDensiTEDEA1263';
import LoadcellDensiTEDEA1510 from './LoadcellDensiTEDEA1510';
import LoadcellDensiMavinNA1 from './LoadcellDensiMavinNA1';
import LoadcellDensiMavinNA2 from './LoadcellDensiMavinNA2';
import LoadcellDensiMavinNA3 from './LoadcellDensiMavinNA3';
import LoadcellDensiMavinNA4 from './LoadcellDensiMavinNA4';
import LoadcellDensiMavinNA10 from './LoadcellDensiMavinNA10';
import LoadcellDensiMavinNA19 from './LoadcellDensiMavinNA19';
import LoadcellDensiMavinNA20 from './LoadcellDensiMavinNA20';
import LoadcellDensiMavinNA128 from './LoadcellDensiMavinNA128';
import LoadcellDensiMavinNA116 from './LoadcellDensiMavinNA116';
import LoadcellDensiMavinNA164 from './LoadcellDensiMavinNA164';
import LoadcellDensiMavinNB2 from './LoadcellDensiMavinNB2';
import LoadcellDensiMavinNS1 from './LoadcellDensiMavinNS1';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path={"/"} element={<AnaSayfa/>}></Route>
      <Route exact path={"/İletişim"} element={<Iletisim/>}></Route>
      <Route exact path={"/Hakkımızda"} element={<Hakkimizda/>}></Route>
      <Route exact path={"/Teraziler"} element={<Teraziler/>}></Route>
      <Route exact path={"/Etiketler"} element={<Etiketler/>}></Route>
      <Route exact path={"/Streçler"} element={<Streçler/>}></Route>
      <Route exact path={"/Basküller"} element={<Basküller/>}></Route>
      <Route exact path={"/Vinç Kantarları"} element={<VincKantarlari/>}></Route>
      <Route exact path={"/Barkodlu Teraziler"} element={<BarkodluTeraziler/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Teraziler"} element={<FiyatHesaplamaliTeraziler/>}></Route>
      <Route exact path={"/Tartım Teraziler"} element={<TartımTeraziler/>}></Route>
      <Route exact path={"/Sayıcı Teraziler"} element={<SayiciTeraziler/>}></Route>
      <Route exact path={"/Hassas Tartım"} element={<HassasTartim/>}></Route>
      <Route exact path={"/Standart Basküller"} element={<StandartBaskuller/>}></Route>
      <Route exact path={"/Endüstriyel Basküller"} element={<EndustriyelBaskuller/>}></Route>
      <Route exact path={"/Transpalet Basküller"} element={<TranspaletBaskuller/>}></Route>
      <Route exact path={"/Barkodlu Cas Teraziler"} element={<BarkodluCas/>}></Route>
      <Route exact path={"/Barkodlu Mettler Teraziler"} element={<BarkodluMettler/>}></Route>
      <Route exact path={"/Barkodlu Densi Teraziler"} element={<BarkodluDensi/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Cas"} element={<FiyatHesaplamaliCas/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Densi"} element={<FiyatHesaplamaliDensi/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Hana"} element={<FiyatHesaplamaliHana/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Tem"} element={<FiyatHesaplamaliTem/>}></Route>
      <Route exact path={"/Tartım Hana"} element={<TartimHana/>}></Route>
      <Route exact path={"/Tartım Neck"} element={<TartimNeck/>}></Route>
      <Route exact path={"/Tartım Cas"} element={<TartimCas/>}></Route>
      <Route exact path={"/Tartım Tem"} element={<TartimTem/>}></Route>
      <Route exact path={"/Tartım Murbay"} element={<TartimMurbay/>}></Route>
      <Route exact path={"/Tartım Dikomsan"} element={<TartimDikomsan/>}></Route>
      <Route exact path={"/Barkodlu Cas CL-8000"} element={<BarkodluCasCl8000/>}></Route>
      <Route exact path={"/Barkodlu Cas CL-3000"} element={<BarkodluCasCl3000/>}></Route>
      <Route exact path={"/Barkodlu Mettler BCom"} element={<BarkodluMettlerBCom/>}></Route>
      <Route exact path={"/Barkodlu Mettler BPlus T2M"} element={<BarkodluBPlusT2M/>}></Route>
      <Route exact path={"/Barkodlu Mettler BPlus H2L"} element={<BarkodluBPlusH2L/>}></Route>
      <Route exact path={"/Barkodlu Mettler FreshBase U2"} element={<BarkodluMettlerFreshBaseU2/>}></Route>
      <Route exact path={"/Barkodlu Densi RLS1000"} element={<BarkodluDensiRLS1000/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Hana HS-5600"} element={<FiyatHesaplamaliHS5600/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Cas PR-II B"} element={<FiyatHesaplamaliCasPR2B/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Cas ER-JR"} element={<FiyatHesaplamaliCasERJR/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Densi PC-100"} element={<FiyatHesaplamaliDensiPc100/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Tem Ege Led"} element={<FiyatHesaplamaliTemEgeLed/>}></Route>
      <Route exact path={"/Fiyat Hesaplamalı Tem Ata Led"} element={<FiyatHesaplamaliTemAtaLed/>}></Route>
      <Route exact path={"/Tartım Hana HS-2000"} element={<TartimHanaHS2000/>}></Route>
      <Route exact path={"/Tartım Hana HS-1000"} element={<TartimHanaHS1000/>}></Route>
      <Route exact path={"/Tartım Neck JCS-B"} element={<TartimNeckJCSB/>}></Route>
      <Route exact path={"/Tartım Cas SW2"} element={<TartimCasSW2/>}></Route>
      <Route exact path={"/Tartım Cas SW2 Su Korumalı"} element={<TartimCasSw2SuKorumalı/>}></Route>
      <Route exact path={"/Tartım Tem Ata TB"} element={<TartimTemAtaTB/>}></Route>
      <Route exact path={"/Tartım Tem Eko"} element={<TartimTemEko/>}></Route>
      <Route exact path={"/Tartım Tem TPT-IP67"} element={<TartimTemTPTIP67/>}></Route>
      <Route exact path={"/Tartım Tem 28x35"} element={<TartimTem28x35/>}></Route> 
      <Route exact path={"/Tartım Murbay Seles AGT Su Korumalı"} element={<TartimMurbaySelesAGTSuKorumalı/>}></Route>
      <Route exact path={"/Tartım Murbay Seles S29 Su Korumalı"} element={<TartimMurbaySelesS29/>}></Route>
      <Route exact path={"/Tartım Murbay Seles T28"} element={<TartimMurbaySelesT28/>}></Route>
      <Route exact path={"/Tartım Dikomsan QW-M"} element={<TartimDikomsanQWM/>}></Route>
      <Route exact path={"/Sayıcı Tem"} element={<SayiciTem/>}></Route>
      <Route exact path={"/Sayıcı Hana"} element={<SayiciHana/>}></Route>
      <Route exact path={"/Sayıcı Dikomsan"} element={<SayiciDikomsan/>}></Route>
      <Route exact path={"/Hassas Tartım Dikomsan"} element={<HassasTartimDikomsan/>}></Route>
      <Route exact path={"/Hassas Tartım Murbay"} element={<HassasTartimMurbay/>}></Route>
      <Route exact path={"/Sayıcı Tem GTC"} element={<SayiciTemGTC/>}></Route>
      <Route exact path={"/Sayıcı Hana HS-7500"} element={<SayiciHanaHS7500/>}></Route>
      <Route exact path={"/Sayıcı Dikomsan JCS-A"} element={<SayiciDikomsanJCSA/>}></Route>
      <Route exact path={"/Sayıcı Dikomsan QC"} element={<SayiciDikomsanQC/>}></Route>
      <Route exact path={"/Hassas Tartım Dikomsan KD-TBC"} element={<HassasTartimDikomsanKDTBC/>}></Route>
      <Route exact path={"/Hassas Tartım Dikomsan HCT-HB"} element={<HassasTartimDikomsanHCTHB/>}></Route>
      <Route exact path={"/Hassas Tartım Dikomsan HT-SH"} element={<HassasTartimDikomsanHTSH/>}></Route>
      <Route exact path={"/Hassas Tartım Murbay Seles And GF-GX"} element={<HassasTartimMurbaySelesAndGFGX/>}></Route>
      <Route exact path={"/Hassas Tartım Murbay Seles NHB"} element={<HassasTartimMurbaySelesNHB/>}></Route>
      <Route exact path={"/Paslanmaz Basküller"} element={<PaslanmazBaskuller/>}></Route>
      <Route exact path={"/Paslanmaz Baskül Murbay"} element={<PaslanmazBaskulMurbay/>}></Route>
      <Route exact path={"/Transpalet Tem"} element={<TranspaletTem/>}></Route>
      <Route exact path={"/Transpalet Hana"} element={<TranspaletHana/>}></Route>
      <Route exact path={"/Standart Baskül Tem"} element={<StandartBaskulTem/>}></Route>
      <Route exact path={"/Endüstriyel Baskül Tem"} element={<EndustriyelBaskulTem/>}></Route>
      <Route exact path={"/Vinç Baskülü Cas"} element={<VincCas/>}></Route>
      <Route exact path={"/Vinç Baskülü Tem"} element={<VincTem/>}></Route>
      <Route exact path={"/Vinç Baskülü Murbay"} element={<VincMurbay/>}></Route>
      <Route exact path={"/Vinç Baskülü Cas IE-1700"} element={<VincCasIE1700/>}></Route>
      <Route exact path={"/Vinç Baskülü Cas CASTON-II PLUS"} element={<VincCasCasTon2Plus/>}></Route>
      <Route exact path={"/Vinç Baskülü Tem SH-WD"} element={<VincTemSHWD/>}></Route>
      <Route exact path={"/Vinç Baskülü Tem Eko"} element={<VincTemEko/>}></Route>
      <Route exact path={"/Vinç Baskülü Tem SH Serisi"} element={<VincTemSHSerisi/>}></Route>
      <Route exact path={"/Vinç Baskülü Murbay OCS-S1"} element={<VincMurbaySelesOCSS1/>}></Route>
      <Route exact path={"/Standart Baskül Tem Teb Meb"} element={<StandartBaskulTemTebMeb/>}></Route>
      <Route exact path={"/Endüstriyel Baskül Tem MLB 1001"} element={<EndustriyelBaskullerTemMLB1001/>}></Route>
      <Route exact path={"/Transpalet Tem Onaylı"} element={<TranspaletTemOnaylı/>}></Route>
      <Route exact path={"/Transpalet Hana HS-2600 WLCD"} element={<TranspaletHanaHS2600WLCD/>}></Route>
      <Route exact path={"/Paslanmaz Baskül Murbay Seles BWS"} element={<PaslanmazBaskulMurbaySelesBWS/>}></Route>
      <Route exact path={"/Paslanmaz Baskül Murbay Seles XK3108B"} element={<PaslanmazBaskulMurbaySelesXK3108B/>}></Route>
      <Route exact path={"/Endüstriyel Malzemeler"} element={<EndustriyelMalzemeler/>}></Route>
      <Route exact path={"/Loadcell"} element={<Loadcell/>}></Route>
      <Route exact path={"/Loadcell Densi"} element={<LoadcellDensi/>}></Route>
      <Route exact path={"/Loadcell Densi TEDEA 1260"} element={<LoadcellDensiTEDEA1260/>}></Route>
      <Route exact path={"/Loadcell Densi TEDEA 1263"} element={<LoadcellDensiTEDEA1263/>}></Route>
      <Route exact path={"/Loadcell Densi TEDEA 1510"} element={<LoadcellDensiTEDEA1510/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA1"} element={<LoadcellDensiMavinNA1/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA2"} element={<LoadcellDensiMavinNA2/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA3"} element={<LoadcellDensiMavinNA3/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA4"} element={<LoadcellDensiMavinNA4/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA10"} element={<LoadcellDensiMavinNA10/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA19"} element={<LoadcellDensiMavinNA19/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA20"} element={<LoadcellDensiMavinNA20/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA128"} element={<LoadcellDensiMavinNA128/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA116"} element={<LoadcellDensiMavinNA116/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NA164"} element={<LoadcellDensiMavinNA164/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NB2"} element={<LoadcellDensiMavinNB2/>}></Route>
      <Route exact path={"/Loadcell Densi Mavin NS1"} element={<LoadcellDensiMavinNS1/>}></Route>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
