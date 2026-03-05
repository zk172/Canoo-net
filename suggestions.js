var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function getSelectedService() {
    if (!document.search.service.options) {
        return 'canooNet';
    }
    for (i = 0; i < document.search.service.length; ++i) {
        if (document.search.service.options[i].selected == true) {
            return document.search.service.options[i].value;
        }
    }
}
function installCompleter(language) {
    document.completer = new Ajax.Autocompleter('input', 'input_auto_complete', '/services/AjaxController', {frequency: '0.3', minChars: '1', indicator: 'myindicator', parameters: 'lang=' + language, afterUpdateElement: getSelection})
    switchServiceOfCompleter(getSelectedService());
}
function getSelection(text, li) {
    document.search.input.value = li.id;
    document.search.submit();
}
function switchServiceOfCompleter(service) {
    document.completer.options.defaultParams = 'service=' + service;
}
function serviceChanged() {
    document.completer.setEnabled(getSelectedService() != 'glossary')
    switchServiceOfCompleter(getSelectedService());
}


}

/*
     FILE ARCHIVED ON 07:21:10 Oct 15, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:34:12 Mar 05, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.715
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.01
  esindex: 0.014
  cdx.remote: 6.557
  LoadShardBlock: 75.998 (3)
  PetaboxLoader3.datanode: 61.234 (5)
  PetaboxLoader3.resolve: 159.543 (3)
  load_resource: 194.893 (2)
*/