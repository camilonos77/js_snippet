function validarNumero(){
        var texto = $(this).val();
        $(this).val(texto.replace(/[A-Za-z$.;:ÃƒÂ±@Ãƒâ€˜^~\<\Ã±\Ã‘\>`,_\Ã¢â€šÂ¬\(\Ã‚Âº\Ã‚Âª\$\%\&\)\=\Ã¢Ë†Å¾\-\Ã‚Â·\_\?\Ã‚Â¿\Ã‚Â¨\[\]\+\*\ÃƒÂ±\Ãƒâ€˜\}\{\Ã‚Â´\#\"\?\Ã‚Â¡\!\\\/\Ã‚Â°\Ã‚Â¬\|]/g,"").replace(/\s/g, ""));
    }


function validarDescripcionTexto(){
    var texto = $(this).val();
    $(this).val(texto.replace(/[$:@^~\<\>`_\Ã¢â€šÂ¬\(\Ã‚Âª\)\=\Ã¢Ë†Å¾\-\Ã‚Â·\%\&\_\?\Ã‚Â¿\Ã‚Â¨\[\]\+\*\}\{\Ã‚Â´\#\"\?\Ã‚Â¡\!\\\/\Ã‚Â°\Ã‚Â¬\|]/g,""));
}

//$('#nombre_peaje').keyup(validarDescripcionTexto);
