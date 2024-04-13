import axios from 'axios';
import { config } from './axiosConfig';
export const AddBonCommande= async (order) => {
  console.log(order)
    return await axios.post(`https://www.24-crm.online/webservice/api/LigBCDV/%7BID%7D?numfac=${order.numfac}&typfac=BC&numlig=${order.numlig}&codart=${order.codeArt}&quantite=${order.quantity}&fodart=0&desart=${order.desart}&datfac=${order.datfac}&priuni=${order.priuni}&remise=0&unite=PC&codtva=0&tautva=0&qtecom=2&CB=&formqt=0&pmp=0&coddos=gd211&serveur=/]QPMFD&user=tb&pwd=Qpmztpgubinfenf%7Bhboj3135&database=PSGD21NEW`);
  }
  export const getNumFacture= async (order) => {
    const response = await axios.get(`https://www.24-crm.online/webservice/api/BCDVCLIs?typpe=BC&codep=&coddos=gd211&serveur=/]QPMFD&user=tb&pwd=Qpmztpgubinfenf%7Bhboj3135&database=PSGD21NEW`);
  
    if (response.data) {
      return response.data
    }
  
  }
 
         
  export const  PrixTotal = async (order) => {
    const response = await axios.post( `https://www.24-crm.online/webservice/api/LigBCDV?FAC=${order.numfac}&typfacc=BC&coddos=gd211&serveur=/]QPMFD&user=tb&pwd=Qpmztpgubinfenf%7Bhboj3135&database=PSGD21NEW`,);
  
    if (response.data) {
      return response.data
    }
  
  }


  export const AddBonCommandeEntéte = async (order) => {
    return await axios.post(`https://www.24-crm.online/webservice/api/BCDVCLIs?numfac&typfac=BC&taurem=0&codcli=${order.codcli}&raisoc=${order.raisoc}&catfisc=0&datfac=${order.datfac}&timbre=false&tauxNASS=0&vendeur=e_commerce&valtimbre=0&codrep=&pj=&smNASS=&0&CodDep=&coddos=gd211&serveur=/]QPMFD&user=tb&pwd=Qpmztpgubinfenf%7Bhboj3135&database=PSGD21NEW`);
  }
  
  export const Switch  = async () => {
    return await axios.put(`https://www.24-crm.online/webservice/api/Switch?code=BC2&valeur&coddos=gd211&serveur=/]QPMFD&user=tb&pwd=Qpmztpgubinfenf%7Bhboj3135&database=PSGD21NEW`);
  }
