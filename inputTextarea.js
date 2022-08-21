
// function inputPrismABAP(){
//     let txtArea = document.querySelector('#txtHtmlStr').value;
//     return `${txtArea}`;
// }

// document.getElementById('btn-swap').onclick = function renderPrismABAP(){
//     document.getElementById('outHtmlStr').innerHTML = inputPrismABAP();
// };

const ABAP_String = `*&---------------------------------------------------------------------*
*& Include          ZFI_PG_ZAR03_F01
*&---------------------------------------------------------------------*
*&---------------------------------------------------------------------*
*& Form CHECK_AUTHORIZATION
*&---------------------------------------------------------------------*
*& text
*&---------------------------------------------------------------------*
*& -->  p1        text
*& <--  p2        text
*&---------------------------------------------------------------------*
FORM CHECK_AUTHORIZATION.
  SELECT DISTINCT
  BUKRS FROM BKPF
  INTO TABLE @DATA(LT_BUKRS)
        WHERE BUKRS IN @S_BUKRS.
  LOOP AT LT_BUKRS ASSIGNING FIELD-SYMBOL(<LF_BUKRS>).
    AUTHORITY-CHECK OBJECT 'Z_CTC_BUKR'
    ID 'BUKRS' FIELD <LF_BUKRS>-BUKRS
    ID 'ACTVT' FIELD '03'.
    IF SY-SUBRC EQ 0.
      GRT_BUKRS-SIGN = 'I'.
      GRT_BUKRS-OPTION = 'EQ'.
      GRT_BUKRS-LOW = <LF_BUKRS>-BUKRS.
      APPEND GRT_BUKRS.
    ENDIF.
  ENDLOOP.     " LOOP AT LT_BUKRS
  IF GRT_BUKRS IS INITIAL .
    DATA(LV_MESS) = |NO authorization FOR Company CODE { S_BUKRS-LOW }|.
    MESSAGE LV_MESS TYPE 'S' DISPLAY LIKE 'E'.
    LEAVE LIST-PROCESSING .
  ENDIF.
ENDFORM.    " FORM CHECK_AUTHORIZATION
*&---------------------------------------------------------------------*
*& Form GET_DATA
*&---------------------------------------------------------------------*
*& text
*&------------------------------------------------------------------
`;
document.getElementById("outABAP_code").innerHTML = ABAP_String;