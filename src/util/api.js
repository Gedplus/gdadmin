import axios from 'axios';
import { config } from './axiosConfig';
export const AddBonCommande= async (order) => {
  console.log(order)
    return await axios.post(`https://www.24-crm.com/webservice/api/LigBCDV/%7BID%7D?numfac=${order.numfac}&typfac=BC&numlig=${order.numlig}&codart=${order.codeArt}&quantite=${order.quantity}&fodart=0&desart=${order.desart}&datfac=${order.datfac}&priuni=${order.priuni}&remise=0&unite=PC&codtva=0&tautva=0&qtecom=2&CB=&formqt=0&pmp=0&coddos=GEDcom&serveur=/]qpmz&user=tb&pwd=Qpmztpgubinfenf{hboj234&database=PSGEDcom`);
  }
  export const getNumFacture= async (order) => {
    const response = await axios.get(`https://www.24-crm.com/webservice/api/BCDVCLIs?typpe=BC&codep=&coddos=GEDcom&serveur=/]qpmz&user=tb&pwd=Qpmztpgubinfenf{hboj234&database=PSGEDcom`);
  
    if (response.data) {
      return response.data
    }
  
  }



  export const AddBonCommandeEntéte = async (order) => {
    return await axios.post(`https://www.24-crm.com/webservice/api/BCDVCLIs?numfac&typfac=BC&taurem=0&codcli=${order.codcli}&raisoc=${order.raisoc}&catfisc=2&datfac=${order.datfac}&timbre=false&tauxNASS=0&vendeur=rami&valtimbre=0&codrep=&pj=&smNASS=&0&CodDep=&coddos=GEDcom&serveur=/]qpmz&user=tb&pwd=Qpmztpgubinfenf{hboj234&database=PSGEDcom`);
  }
  
  export const Switch  = async () => {
    return await axios.put(`https://www.24-crm.com/webservice/api/Switch?code=BC2&valeur&coddos=GEDcom&serveur=/]qpmz&user=tb&pwd=Qpmztpgubinfenf{hboj234&database=GEDcom`);
  }
