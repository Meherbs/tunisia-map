// JavaScript Document
var IB=new Object;
var isIE = document.all;
var xMousePos=0;
var yMousePos=0;
var UserDatas='';
var UserArray=new Array();
// Global variables
document.onmousemove = pointeurDeplace

var EVAL_PRODUCT_ID= function (obj) {
	alert(obj.responseText);
}

function PostEvalForm(product_id){
	var NOM=document.getElementById('NOM').value;
	var PRENOM=document.getElementById('PRENOM').value;
	var SOCIETE=document.getElementById('SOCIETE').value;
	var EMAIL=document.getElementById('EMAIL').value;
	var TEL_DIRECT=document.getElementById('TEL_DIRECT').value;
	if(NOM.length==0){alert('Veuillez indiquer votre nom...');return false;}
	if(PRENOM.length==0){alert('Veuillez indiquer votre prenom...');return false;}
	if(SOCIETE.length==0){alert('Veuillez indiquer le nom de votre societe...');return false;}
	if(EMAIL.length==0){alert("Nous ne pourrons pas vous envoyer la clef d'evaluation \n si votre adresse eMail n'est pas renseignee");return false;}
	if(TEL_DIRECT.length==0){alert("Nous ne pourrons pas vous envoyer la clef d'evaluation \n si votre numأƒآ©ro de telephone n'est pas renseigne");return false;}
	var XHR = new XHRConnection();
	XHR.appendData('NOM', NOM);
	XHR.appendData('PRENOM', PRENOM);
	XHR.appendData('SOCIETE', SOCIETE);
	XHR.appendData('EMAIL', EMAIL);
	XHR.appendData('EVAL_PRODUCT_ID', product_id);
	XHR.appendData('TEL_DIRECT', TEL_DIRECT);
	XHR.sendAndLoad('index.php', "POST",EVAL_PRODUCT_ID);
	}

function EvalForm(product_id){
		document.getElementById("zone").style.width='450px';
		document.getElementById("zone").style.height='auto';
    	document.getElementById("zone").style.top='100px';
    	document.getElementById("zone").style.left='500px';
		document.getElementById("zone").style.zIndex='3000';
    	document.getElementById("zone").style.visibility="visible";
		var XHR = new XHRConnection();
		XHR.setRefreshArea('zone');
		XHR.appendData('EVAL_FORM', product_id);
		XHR.sendAndLoad('index.php', "GET");
		}
		
function ShowVideo(path,swidth,sHeight){

			var myDomain = document.domain;
			var XHR = new XHRConnection();
			XHR.appendData('BuildVideo', path);
			document.getElementById('zone').style.visibility="visible";
			document.getElementById('zone').style.top="90px";
			document.getElementById('zone').style.left="10px";
			document.getElementById('zone').style.width=swidth + 'px';
			document.getElementById('zone').style.height=sHeight + 'px';
			document.getElementById('zone').style.zIndex="3000";
			XHR.setRefreshArea('zone'); 
			XHR.sendAndLoad('http://' + myDomain + '/index.php', 'GET');
			}	


function pointeurDeplace(e){
	xMousePos=pointeurX(e);
    yMousePos = pointeurY(e);
	
}

function swapimage(md,pic){
	document.getElementById(md).src=pic;
	}
	
var redac_add_article_listener= function (obj) {
	var tutorial_id=obj.responseText;
	alert('Vous allez أƒآھtre redirigأƒآ© vers le nouvel article numأƒآ©ro: '+ tutorial_id + '\nCet article أƒ  أƒآ©tأƒآ© classأƒآ© dans la section nouveaux articles');
	document.location.href='index.php?EditID=' + tutorial_id;
	}	
	
function RedactorAddNewArticle(){
	if(confirm('Do you want to add a new article ?')){
		var XHR = new XHRConnection();
		XHR.appendData('RedactorAddNewArticle', 'yes');
		XHR.sendAndLoad('index.php', "GET",redac_add_article_listener);
	}
	
	
}	
	
//----------------------- PHPBB ----------------------------------------------------

var response_template_bandeau= function (obj) {
document.getElementById('TopContent').style.backgroundImage="url("+obj.responseText +")";
}

function template_faqs_menus_gauche(){
	var myDomain = document.domain;
	var URL="http://" + myDomain + "/index.php?faqs_menus_gauche=yes";
	var XHR = new XHRConnection();
	XHR.setRefreshArea('faqs_menus_gauche');
	XHR.sendAndLoad(URL,"GET");	
	
	
}

function template_top_content(){
	var myDomain = document.domain;
	var URL="http://" + myDomain + "/index.php?TopContent=yes";
	var XHR = new XHRConnection();
	XHR.setRefreshArea('TopContent');
	XHR.sendAndLoad(URL,"GET");
	template_bandeau();	
	template_navigation();
	template_faqs_menus_gauche();
	//template_design_left_menus();
	}	
function template_bandeau(){
	var myDomain = document.domain;
	var URL="http://" + myDomain + "/index.php?template_bandeau=yes";
	var XHR = new XHRConnection();
	XHR.sendAndLoad(URL,"GET",response_template_bandeau);
	}
	
function template_navigation(){
	var myDomain = document.domain;
	var URL="http://" + myDomain + "/index.php?template_navigation=yes&forum=yes";
	var XHR = new XHRConnection();
	XHR.setRefreshArea('top_nav');
	XHR.sendAndLoad(URL,"GET");
	}
	
function template_design_left_menus(){
var myDomain = document.domain;
	var URL="http://" + myDomain + "/index.php?template_menus_gauche=yes&forum=yes";
	var XHR = new XHRConnection();
	XHR.setRefreshArea('design_left_menus');
	XHR.sendAndLoad(URL,"GET");	
	}
	
function design_fill_body_foot(){
	var myDomain = document.domain;
	var URL="http://" + myDomain + "/index.php?design_fill_body_foot=yes";
	var XHR = new XHRConnection();
	XHR.setRefreshArea('foot_forum');
	XHR.sendAndLoad(URL,"GET");	
	}	


function design_fill_top(){
	var myDomain = document.domain;			
	var URL="http://" + myDomain + "/index.php?design_fill_top=yes";
	var XHR = new XHRConnection();
	XHR.setRefreshArea('TopContent');
	XHR.sendAndLoad(URL,"GET");	
	}
	
function design_fill_bottom(){
	var myDomain = document.domain;
	var URL="http://" + myDomain + "/index.php?design_fill_bottom=yes";
	var XHR = new XHRConnection();
	XHR.setRefreshArea('bottomBody');
	XHR.sendAndLoad(URL,"GET");	
	}	
	
function design_fill_top_nav(){
	var myDomain = document.domain;
	var URL="http://" + myDomain + "/index.php?design_fill_top_nav=forum";
	var XHR = new XHRConnection();
	XHR.setRefreshArea('top_nav');
	XHR.sendAndLoad(URL,"GET");	
	}	
	
function design_fill_left_menus(){
	var myDomain = document.domain;
	var URL="http://" + myDomain + "/index.php?design_fill_left_menus=yes";
	var XHR = new XHRConnection();
	XHR.setRefreshArea('design_left_menus');
	XHR.sendAndLoad(URL,"GET");	
	}

	
var AjaxPhpBBUsername= function (obj) {
	UserDatas=obj.responseText;
}
	
function PhpBBAuthentified(){
	if(VerifyPhpBBUsername()==true){
		if (UserArray["session_logged_in"]==1){
			Set_Cookie('phpbb_logged','1',1,'/','','');
			Set_Cookie('phpbb_userid',UserArray["user_id"],1,'/','','');
			Set_Cookie('phpbb_email',UserArray["user_email"],1,'/','','');
			Set_Cookie('phpbb_nickname',UserArray["username"],1,'/','','');
		}else{
			deleteCookie('phpbb_logged','/','');
			deleteCookie('phpbb_userid','/','');
			deleteCookie('phpbb_email','/','');
			deleteCookie('phpbb_nickname','/','');
		}
	}
}

 function deleteCookie( name, path, domain ) {
	if ( Get_Cookie( name ) ) document.cookie = name + '=' +( ( path ) ? ';path=' + path : '') +( ( domain ) ? ';domain=' + domain : '' ) +';expires=Thu, 01-Jan-1970 00:00:01 GMT';
 }	
	
function VerifyPhpBBUsername(){
	var i;
	var arrtmp;
	var usrARR;
	var XHR = new XHRConnection();
	var myDomain = document.domain;
	var URL="http://" + myDomain + "/forum/isLogged.php";
	XHR.sendAndLoad(URL, "GET",AjaxPhpBBUsername);
	usrARR=UserDatas.split(';');
	UserDatas='';
	 	for(var i = 0; i < usrARR.length; i++){
			arrtmp=usrARR[i].split('=');
			UserArray[arrtmp[0]]=arrtmp[1];
		}	
		return true;
	}	
	
//----------------------- TUTORIALS FORMULAIRES ----------------------------------------------------	
		function PostFormulaireVote(answer,lang){
			var myDomain = document.domain;
			var XHR = new XHRConnection();
			var article_id=document.getElementById('VOTE_ID').value;
			XHR.appendData('VOTE_ID', document.getElementById('VOTE_ID').value);	
			XHR.appendData('comments', document.getElementById('comments').value);	
			XHR.appendData('answer', answer);
			//XHR.appendData('lang', document.getElementById('lang').value);
			switch(lang){
				case '0':
					alert('Merci nous vous avons bien pris en compte vos suggestions');
					XHR.appendData('lang', lang);
					break;
				case '2':
					alert('أ‚آ،Gracias hemos tomado cuenta de sus sugestiones!');
					XHR.appendData('lang', lang);
					break;
				case '3':
					alert('Merci nous vous avons bien pris en compte vos suggestions');
					XHR.appendData('lang', lang);
					break;
				case '4':
					alert('Merci nous vous avons bien pris en compte vos suggestions');
					XHR.appendData('lang', lang);
					break;
				default:
					alert('Merci nous vous avons bien pris en compte vos suggestions');
					XHR.appendData('lang', '0');
					break;
			}
			XHR.sendAndLoad('http://' + myDomain + '/post-formulaires-kb.php', 'POST');
			document.getElementById('zone').innerHTML='';
			document.getElementById('zone').style.visibility="visible";
			document.location.href="http://" + myDomain + "/index.php?article=" + article_id;
			
		}
		
		
		function LoadFormulaireVoteFaq(tutorial_id){
			var myDomain = document.domain;
			var XHR = new XHRConnection();
			XHR.appendData('LoadFormulaireVoteFaq', tutorial_id);
			document.getElementById('zone').style.visibility="visible";
			document.getElementById('zone').style.top="90px";
			document.getElementById('zone').style.left="290px";
			document.getElementById('zone').style.width="400px";
			document.getElementById('zone').style.zIndex="3000";
			XHR.setRefreshArea('zone'); 
			XHR.sendAndLoad('http://' + myDomain + '/index.php', 'GET');
		}	
	
//----------------------- PHPBB ----------------------------------------------------
var AjaxPopUpInfos= function (obj) {
	document.getElementById('PopUpInfos').innerHTML=obj.responseText;
	}

function PopUpInfos(url){
		var top=(yMousePos +10);
		var left=(xMousePos +10);
		var max=720;
		if ((left+285)>max){
			left=left-285;
			
			
		}
		top=top + 'px';
		left=left+'px';
		
		//alert(top + 'x'+left);
		document.onmousemove = pointeurDeplace
 	 	document.getElementById('PopUpInfos').innerHTML='&nbsp;';
	 	document.getElementById('PopUpInfos').style.width='285px';
		document.getElementById('PopUpInfos').style.height='auto';
    	document.getElementById('PopUpInfos').style.top=top;
    	document.getElementById('PopUpInfos').style.left=left;
		document.getElementById('PopUpInfos').style.zIndex='3000';
    	document.getElementById('PopUpInfos').style.visibility="visible";
    	document.getElementById('PopUpInfos').style.backgroundColor="#eef7f6";
    	document.getElementById('PopUpInfos').style.borderRight = "solid 1px #A2C035";
		document.getElementById('PopUpInfos').style.borderBottom = "solid 1px #A2C035";
    	document.getElementById('PopUpInfos').style.paddingLeft = "35px";
		var XHR = new XHRConnection();
		//alert(url);
		XHR.sendAndLoad(url, "GET",AjaxPopUpInfos);		
		}

// TOOLTIPS ----------------------------------------------------------------------------
function HideBulle() {
	document.onmousemove = pointeurDeplace
	document.getElementById('PopUpInfos').style.visibility="hidden";
	document.getElementById('PopUpInfos').style.border ="none";
	document.getElementById('PopUpInfos').style.padding ="0";
	document.getElementById('PopUpInfos').style.backgroundColor="#FFFFFF";
	document.getElementById('PopUpInfos').style.zIndex='0';
	
}

function AffBulle(texte) {
		document.onmousemove = pointeurDeplace
  		var contenu=texte;
 	 	document.getElementById('PopUpInfos').innerHTML=
			"<div style='padding:5px;text-color:#FFFFFF;text-align:left;font-size:16px;font-family:\"Trebuchet MS\";'>"+ contenu+ "</div>";
	 	document.getElementById('PopUpInfos').style.width='auto';
		document.getElementById('PopUpInfos').style.height='auto';
    	document.getElementById('PopUpInfos').style.top=(yMousePos +10) + 'px';
    	document.getElementById('PopUpInfos').style.left=(xMousePos +10)+ 'px';
    	document.getElementById('PopUpInfos').style.visibility="visible";
    	document.getElementById('PopUpInfos').style.backgroundColor="#3366FF";
    	document.getElementById('PopUpInfos').style.borderRight = "solid 1px #000000";
		document.getElementById('PopUpInfos').style.borderBottom = "solid 1px #000000";
		document.getElementById('PopUpInfos').style.borderTop = "solid 1px #000000";
		document.getElementById('PopUpInfos').style.borderLeft = "solid 1px #000000";
		document.getElementById('PopUpInfos').style.zIndex = "5000";
  	}

//ROLLOVER LIST ---------------------------------------------------------------
function MouseOverlight(div){
		div.style.backgroundColor='#eef7f6'
		div.style.borderBottom='1px solid #CCCCCC'
		div.style.borderRight='1px solid #CCCCCC'
		}
	function MouseOutlight(div){
		div.style.backgroundColor='transparent'
		div.style.borderBottom='1px transparent'
		div.style.borderRight='1px transparent'
	}
//-------------------------------------------------------------------------------

function HideDive(id){
	 document.getElementById(id).innerHTML='';
	 document.getElementById(id).style.visibility="hidden";
	}

function LodPod(Pod,id){
	var XHR = new XHRConnection();
	XHR.appendData('pod',Pod);
	XHR.setRefreshArea(id); 
	XHR.sendAndLoad('index.php', "GET");	
	}

function ToggleDownload(product_id,ztype){
	var XHR = new XHRConnection();
	XHR.appendData('ToggleDownload',ztype);
	XHR.appendData('product_id',product_id);
	XHR.setRefreshArea('ajax-download'); 
	XHR.sendAndLoad('index.php', "GET");	
	}




//----------------------- Moteur de recherche ---------------------------------------
function TopRecherche(e){
	if(checkEnter(e)==true){
		var myDomain = document.domain;
		var Ssearch=document.getElementById('TopRecherche').value;
		var XHR = new XHRConnection();
		var sURL="http://" + myDomain + "/index.php?FindStrings=" + URLEncode(Ssearch);
		document.location.href=sURL;
		}
	}
	
function TopRechercheOnChange(){
		var XHR = new XHRConnection();
		var myDomain = document.domain;
		XHR.appendData('FindStrings', document.getElementById('TopRecherche').value);
		XHR.appendData('product_id', document.getElementById('product_id').value);
		XHR.setRefreshArea('MyContentBodyDatas');
		XHR.sendAndLoad("http://" + myDomain + "/index.php", "GET");
	}	
	
function TopRechercheOver(ID){	
	document.getElementById(ID).style.backgroundColor='#d9f5ea';
	document.getElementById(ID).style.cursor='help';
	document.getElementById(ID + "_tips").style.backgroundColor='#FFFFFF';
	document.getElementById(ID + "_tips").style.color='black';
	document.getElementById(ID + "_content").style.color='black';
	document.getElementById(ID + "_title").style.color='#e30200';
}
function TopRechercheOut(ID){	
	document.getElementById(ID).style.cursor='default';
	document.getElementById(ID).style.backgroundColor='#FFFFFF';
	document.getElementById(ID + "_tips").style.backgroundColor='#979797';
	document.getElementById(ID + "_tips").style.color='white';
	document.getElementById(ID + "_content").style.color='#979797';
	document.getElementById(ID + "_title").style.color='black';
}
function TopRechercheClick(ID){	
	location.href= 'index.php?article='+ID;
	return false;
	}
	
	
function checkEnter(e){
var characterCode 
if(e && e.which){ 
	e = e
	characterCode = e.which 
	}
	else{
	e = event
	characterCode = e.keyCode
	}

	if(characterCode == 13){ 
		return true}
	else{
		return false
	}

}

function Set_Cookie( name, value, expires, path, domain, secure ) {
var today = new Date();
today.setTime( today.getTime() );
if ( expires ){expires = expires * 1000 * 60 * 60 * 24;}
var expires_date = new Date( today.getTime() + (expires) );

	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
	( ( path ) ? ";path=" + path : "" ) + 
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
}

function Get_Cookie( name ) {
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) &&( name != document.cookie.substring( 0, name.length ) ) ){
		return null;
		}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
		return unescape( document.cookie.substring( len, end ) );
}

function SendCookieEnv(serial){
	PhpBBAuthentified();
	var httpfrom=document.referrer;
	var currentPage=document.URL;
	var myDomain = document.domain;
	var Navigator=navigator.appCodeName;
	var Navigatorversion=navigator.appVersion;
	var XHR = new XHRConnection();
	XHR.sendAndLoad("http://" + myDomain + "/tracevisits.php?serial=" + serial + "&httpfrom=" + httpfrom + "&currentPage=" + currentPage + "&myDomain=" + myDomain + "&Navigator="+ Navigator + "&Navigatorversion=" + Navigatorversion, "GET");	
}


function SendFaq(FaqID){
	var httpfrom=document.referrer;
	var currentPage=document.URL;
	var myDomain = document.domain;
	var Navigator=navigator.appCodeName;
	var Navigatorversion=navigator.appVersion;
	var XHR = new XHRConnection();
	XHR.sendAndLoad("http://" + myDomain + "/tracevisits.php?tutorial_id=" + FaqID, "GET");	
}
	
function TraceCookie(){
	var serial=Get_Cookie('kaspersky_serial');
	if(!serial){
		serial=SetCookieID();
		Set_Cookie('kaspersky_serial',serial,600,'/','','');
	}
	SendCookieEnv(serial);
}	

function SetCookieID(){
	var Myip=GenerateNumberStoo();
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();	
	var hours = currentTime.getHours();
	var secondes=currentTime.getSeconds();
	var minutes = currentTime.getMinutes();	
	var timeserial=year+"." + day+"." + month+"." +hours+"." +secondes;
	return Myip+"."+timeserial;
	}
	
	
function GenerateNumberStoo() {
var space = ('') //Spacer for between numbers
var rand_inta = Math.floor(Math.random()*100); //Get first number
var rand_intb = Math.floor(Math.random()*100); //Get second number
var rand_intc = Math.floor(Math.random()*100); //Get third number
var rand_intd = Math.floor(Math.random()*100); //Get fourth number
var rand_inte = Math.floor(Math.random()*100); //Get fifth number
return rand_inta+space+rand_intb+space+rand_intc+space+rand_intd+space+rand_inte;
}
function Set_Cookie( name, value, expires, path, domain, secure ) {
var today = new Date();
today.setTime( today.getTime() );
if ( expires ){expires = expires * 1000 * 60 * 60 * 24;}
var expires_date = new Date( today.getTime() + (expires) );

	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
	( ( path ) ? ";path=" + path : "" ) + 
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
}

function Get_Cookie( name ) {
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ){
		return null;
		}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}
	
	
function TabClick( nTab ){ 
    Col = document.getElementsByName("Content"); 
    for (i = 0; i < document.getElementsByName("Content").length; i++) 
        { 
        document.getElementsByName("tabs")[i].className = "TabBorderBottom TabCommon TabOff"; 
        document.getElementsByName("Content")[i].style.display = "none"; 
        } 
    document.getElementsByName("Content")[nTab].style.display = "block";     
    document.getElementsByName("tabs")[nTab].className = "TabCommon TabOn TabActiveBackground TabActiveBorderLeftRight"; 
} 


function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->
	function openKWSpage(){
		var width = 735;
		var height = 525;
		var top = (window.screen.height - height - 50) / 2;
		var left = (window.screen.width - width) / 2;
		window.open('http://webscanner.kaspersky.fr/kavwebscan.html','KAVWebScanner', 'fullscreen=no,toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,directories=no,location=no, width='+width+', height='+height+', top='+top+', left='+left+'');
	}
	
	function SubmitForm(FormName){
				document.FormName.submit();
	}
	
function General_PopUp(para){
 	var PopupWindow=null;
 	settings='width=600,height=400,location=no,directories=no,menubar=no,toolbar=no,status=no,scrollbars=yes,resizable=no,dependent=yes';
    PopupWindow=window.open(para,'',settings);
    PopupWindow.focus();
	}
	
function ExpandCollapse(sDivIndex){
	if (document.getElementById("divShow-" + sDivIndex).style.display == "block")
	{
		document.getElementById("divShow-" + sDivIndex).style.display = "none";
		document.getElementById("imgExpand-" + sDivIndex).src = "http://support.kaspersky.fr/imgglobal/tables/icon_plus.gif";
	}
	else
	{
		document.getElementById("divShow-" + sDivIndex).style.display = "block";
		document.getElementById("imgExpand-" + sDivIndex).src = "http://support.kaspersky.fr/imgglobal/tables/icon_minus.gif";
	}
}

function Expand(){}


window.onload=montre;
function montre(id) {
var d = document.getElementById(id);
	for (var i = 1; i<=10; i++) {
		if (document.getElementById('smenu'+i)) {document.getElementById('smenu'+i).style.display='none';}
	}
if (d) {d.style.display='block';}
}

function s_PopUp(url,l,h){
 	var PopupWindow=null;
 	settings='width='+l +',height='+h +',location=no,directories=no,menubar=no,toolbar=no,status=no,scrollbars=yes,resizable=no,dependent=yes';
    PopupWindow=window.open(url,'',settings);
    PopupWindow.focus();
	} 

function submitform(formname){	
		document.forms[formname].submit(); 
  		}	
	
function PopLive(url,l,h)
	{
 	var PopupWindow=null;
 	settings='width='+l +',height='+h +',location=no,directories=no,menubar=no,toolbar=no,status=no,scrollbars=yes,resizable=no,dependent=yes';
    PopupWindow=window.open(url,'',settings);
    PopupWindow.focus();
	} 

function PopUp(para)
{
	var PopupWindow=null;
 	settings='width=800,height=650,location=1,directories=no,menubar=1,toolbar=1,status=1,scrollbars=1,resizable=1,dependent=1';
    PopupWindow=window.open(para,'',settings);
    PopupWindow.focus();
} 

function PopUpClose(url,l,h)
{
 	var PopupWindow=null;
 	settings='width='+l +',height='+h +',location=no,directories=no,menubar=no,toolbar=no,status=no,scrollbars=yes,resizable=no,dependent=yes';
    PopupWindow=window.open(url,'',settings);
    PopupWindow.focus();
    self.close();
}

function kbPageCopyDatas()
{	
	var link=document.forms.FormCopy.arch.value;
	textRange = document.forms.FormCopy.arch.createTextRange(); 
	textRange.execCommand("RemoveFormat"); 
	textRange.execCommand("Copy"); 
	alert("Le lien :\n" + link + "\n Vient d'أ¯آ؟آ½tre copiأ¯آ؟آ½ dans la mأ¯آ؟آ½moire de votre ordinateur.\n\n Faites \n\tedition/coller\n \tou CTRL+v pour retrouver le lien ");
}



	
var DH = 0;var an = 0;var al = 0;var ai = 0;if (document.getElementById) {ai = 1; DH = 1;}else {if (document.all) {al = 1; DH = 1;} else { browserVersion = parseInt(navigator.appVersion); if ((navigator.appName.indexOf('Netscape') != -1) && (browserVersion == 4)) {an = 1; DH = 1;}}} function fd(oi, wS) {if (ai) return wS ? document.getElementById(oi).style:document.getElementById(oi); if (al) return wS ? document.all[oi].style: document.all[oi]; if (an) return document.layers[oi];}
function pw() {return window.innerWidth != null? window.innerWidth: document.body.clientWidth != null? document.body.clientWidth:null;}
function mouseX(evt) {if (evt.pageX) return evt.pageX; else if (evt.clientX)return evt.clientX + (document.documentElement.scrollLeft ?  document.documentElement.scrollLeft : document.body.scrollLeft); else return null;}
function mouseY(evt) {if (evt.pageY) return evt.pageY; else if (evt.clientY)return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop); else return null;}
function tooltip(evt,oi) {if (DH) {var wp = pw(); ds = fd(oi,1); dm = fd(oi,0); st = ds.visibility; if (dm.offsetWidth) ew = dm.offsetWidth; else if (dm.clip.width) ew = dm.clip.width; if (st == "visible" || st == "show") { ds.visibility = "hidden"; } else {tv = mouseY(evt) + 20; lv = mouseX(evt) - (ew/4); if (lv < 2) lv = 2; else if (lv + ew > wp) lv -= ew/2; if (!an) {lv += 'px';tv += 'px';} ds.left = lv; ds.top = tv; ds.visibility = "visible";}}}


function SetAllCheckBoxes(FormName, FieldName, CheckValue)
{
	alert('Test');
	if(!document.forms[FormName])
		return;
	var objCheckBoxes = document.forms[FormName].elements[FieldName];
	if(!objCheckBoxes)
		return;
	var countCheckBoxes = objCheckBoxes.length;
	if(!countCheckBoxes)
		objCheckBoxes.checked = CheckValue;
	else
		// set the check value for all check boxes
		for(var i = 0; i < countCheckBoxes; i++)
			objCheckBoxes[i].checked = CheckValue;
}


function toggleAll(name) {
 
	var inputs	= document.getElementsByTagName('input');
	var count	= inputs.length;
	
	for (i = 0; i < count; i++) {
	
		_input = inputs.item(i);
		
		if (_input.type == 'checkbox' && _input.id.indexOf('chk-' + name) != -1) {
		
			_input.checked = document.getElementById(name + '-all').checked;
		
		}
		
	}
 
}

function checkfree(name) {
 
	var inputs	= document.getElementsByTagName('input');
	var count	= inputs.length;
	
	for (i = 0; i < count; i++) {
	
		_input = inputs.item(i);
		
		if (_input.type == 'checkbox' && _input.id.indexOf('1') != -1) {
		
			_input.checked = document.getElementById('free').checked;
		
		}	
		
	}
 
}

function checkbasic(name) {
	
	var inputs	= document.getElementsByTagName('input');
	var count	= inputs.length;
	
	for (i = 0; i < count; i++) {
		
		_input = inputs.item(i);
		
		if (_input.type == 'checkbox' && _input.id.indexOf('2') != -1) {
		
			_input.checked = document.getElementById('bas').checked;
		
	    }
	}
	
}

function checkadv(name) {
	
	var inputs	= document.getElementsByTagName('input');
	var count	= inputs.length;
	
	for (i = 0; i < count; i++) {
		
		_input = inputs.item(i);
		
		if (_input.type == 'checkbox' && _input.id.indexOf('3') != -1) {
		
			_input.checked = document.getElementById('adv').checked;
		
	    }
	}
	
}

function checkall(name) {
	
	var inputs	= document.getElementsByTagName('input');
	var count	= inputs.length;
	
	for (i = 0; i < count; i++) {
		
		_input = inputs.item(i);
		
		if (_input.type == 'checkbox' && _input.id.indexOf('4') != -1) {
		
			_input.checked = document.getElementById('all').checked;
		
	    }
	}
	
}

function DateForm() {
	startdate = document.forms[0].elements[0].value;
	finaldate = document.forms[0].elements[1].value;
	var amin=2005; // annأ¯آ؟آ½e mini
    var amax=3000; // annأ¯آ؟آ½e maxi
    var separateur="-"; // separateur entre jour/mois/annee
    var a=(startdate.substring(0,4));
    var m=(startdate.substring(5,7));
    var j=(startdate.substring(8,10));
    var af=(finaldate.substring(0,4));
    var mf=(finaldate.substring(5,7));
    var jf=(finaldate.substring(8,10));
    var ok=1;
	if(startdate == "") { 
		alert('Field Start Date is empty');
		document.forms[0].elements[0].focus();
		return false;
	}
	if(finaldate == "") { 
		alert('Field End Date is empty');
		document.forms[0].elements[1].focus();
		return false;
	}
	
	//Verification du format de la date de debut	
    if ( ((isNaN(j))||(j<1)||(j>31)) && (ok==1) ) {
       //alert("Start Date is incorrect. Please use calendar to fill in the form -day "+j+" err"); ok=0;
       alert("Start Date is incorrect. Please use calendar to fill in the form"); ok=0;
       return false;
    }
    if ( ((isNaN(m))||(m<1)||(m>12)) && (ok==1) ) {
       //alert("Start Date Date incorrect. Please use calendar to fill in the form -month "+m+" err"); ok=0;
       alert("Start Date is incorrect. Please use calendar to fill in the form"); ok=0;
       return false;
    }
    if ( ((isNaN(a))||(a<amin)||(a>amax)) && (ok==1) ) {
       //alert("Start Date Date incorrect. Please use calendar to fill in the form -year "+a+" err"); ok=0;
       alert("Start Date is incorrect. Please use calendar to fill in the form"); ok=0;
       return false;
    }
    if ( ((startdate.substring(4,5)!=separateur)||(startdate.substring(7,8)!=separateur)) && (ok==1) ) {
       //alert("Start Date Date incorrect. Please use calendar to fill in the form -separator1 "+startdate.substring(4,5)+" -separator2 "+startdate.substring(7,8)); ok=0;
       alert("Start Date is incorrect. Please use calendar to fill in the form"); ok=0;
       return false;
    }
    if (ok==1) {
       var d2=new Date(a,m-1,j);
       j2=d2.getDate();
       m2=d2.getMonth()+1;
       a2=d2.getFullYear();
       if (a2<=100) {a2=1900+a2}
       if ( (j!=j2)||(m!=m2)||(a!=a2) ) {
          //alert("Start Date Incorrect! -date");
          alert("Start Date is incorrect!");
          ok=0;
          return false;
       }
    }
    
    //Verification du format de la date finale	
    if ( ((isNaN(jf))||(jf<1)||(jf>31)) && (ok==1) ) {
       //alert("Final Date is incorrect. Please use calendar to fill in the form -day "+j+" err"); ok=0;
       alert("End Date is incorrect. Please use calendar to fill in the form"); ok=0;
       return false;
    }
    if ( ((isNaN(mf))||(mf<1)||(mf>12)) && (ok==1) ) {
       //alert("Final Date Date incorrect. Please use calendar to fill in the form -month "+m+" err"); ok=0;
       alert("End Date is incorrect. Please use calendar to fill in the form"); ok=0;
       return false;
    }
    if ( ((isNaN(af))||(af<amin)||(af>amax)) && (ok==1) ) {
       //alert("Final Date Date incorrect. Please use calendar to fill in the form -year "+a+" err"); ok=0;
       alert("End Date is incorrect. Please use calendar to fill in the form"); ok=0;
       return false;
    }
    if ( ((finaldate.substring(4,5)!=separateur)||(finaldate.substring(7,8)!=separateur)) && (ok==1) ) {
       //alert("Final Date Date incorrect. Please use calendar to fill in the form -separator1 "+startdate.substring(4,5)+" -separator2 "+startdate.substring(7,8)); ok=0;
       alert("End Date is incorrect. Please use calendar to fill in the form"); ok=0;
       return false;
    }
    if (ok==1) {
       var d2=new Date(af,mf-1,jf);
       j2=d2.getDate();
       m2=d2.getMonth()+1;
       a2=d2.getFullYear();
       if (a2<=100) {a2=1900+a2}
       if ( (jf!=j2)||(mf!=m2)||(af!=a2) ) {
          //alert("Final Date Incorrect! -date");
          alert("End Date is incorrect!");
          ok=0;
          return false;
       }
    }
    
    //Comparaison date debut et date finale
    var myDate = new Date;
    var myDatef = new Date;
    myDate.setDate(j);
    myDate.setMonth(m-1);
    myDate.setFullYear(a); 
    myDatef.setDate(jf);
    myDatef.setMonth(mf-1);
    myDatef.setFullYear(af);
    if (myDate > myDatef) {
      alert("Start Date is superior to End Date");
      return false;
    }

    //Verification par rapport أ¯آ؟آ½ la date du jour
    Today = new Date;
    if (myDate>Today) {
      alert("Error in Start Date");
      return false;
    }
    if (myDatef>Today) {
      alert("Error in End Date");
      return false;
    }
    
	return true;
}

function lightup(imageobject, opacity){
 if (navigator.appName.indexOf("Netscape")!=-1 &&parseInt(navigator.appVersion)>=5){
		imageobject.style.MozOpacity=opacity/100
	}
 else if (navigator.appName.indexOf("Microsoft")!= -1 &&parseInt(navigator.appVersion)>=4){
		
		imageobject.filters.alpha.opacity=opacity
	}
}

function URLEncode(plaintext)
{
	// The Javascript escape and unescape functions do not correspond
	// with what browsers actually do...
	var SAFECHARS = "0123456789" +					// Numeric
					"ABCDEFGHIJKLMNOPQRSTUVWXYZ" +	// Alphabetic
					"abcdefghijklmnopqrstuvwxyz" +
					"-_.!~*'()";					// RFC2396 Mark characters
	var HEX = "0123456789ABCDEF";
	var encoded = "";
	for (var i = 0; i < plaintext.length; i++ ) {
		var ch = plaintext.charAt(i);
	    if (ch == " ") {
		    encoded += "+";				// x-www-urlencoded, rather than %20
		} else if (SAFECHARS.indexOf(ch) != -1) {
		    encoded += ch;
		} else {
		    var charCode = ch.charCodeAt(0);
			if (charCode > 255) {
			    alert( "Unicode Character '" 
                        + ch 
                        + "' cannot be encoded using standard URL encoding.\n" +
				          "(URL encoding only supports 8-bit characters.)\n" +
						  "A space (+) will be substituted." );
				encoded += "+";
			} else {
				encoded += "%";
				encoded += HEX.charAt((charCode >> 4) & 0xF);
				encoded += HEX.charAt(charCode & 0xF);
			}
		}
	} // for

	return encoded;
};