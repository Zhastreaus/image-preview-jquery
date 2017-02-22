$(document).ready(function() {

    $(".previewable").each(function() {

        $(this).change(function(){

            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $($(this).attr('data-preview-target')).attr('src', e.target.result);
                }.bind(this);

                reader.readAsDataURL(this.files[0]);
            }

        });
        
    });

});