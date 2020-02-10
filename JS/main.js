$(() => {

    $(".PLTScoreParent").hide();
    $(".ElapsedTimeParent").hide();

    $(".TMAScoreParent").hide();
    $(".DeltaNeutrophilIndexParent").hide();
    $(".LUCScoreParent").hide();

    $('#PLTChange').change(function() {
        if(this.checked) {
            $(".PLTScoreParent").show();
            $(".ElapsedTimeParent").show();
        }
        else {
            $(".PLTScoreParent").hide();
            $(".ElapsedTimeParent").hide();
        }
    });

    $('#RUOParameters').change(function() {
        if(this.checked) {
            $(".TMAScoreParent").show();
            $(".DeltaNeutrophilIndexParent").show();
            $(".LUCScoreParent").show();
        }
        else {
            $(".TMAScoreParent").hide();
            $(".DeltaNeutrophilIndexParent").hide();
            $(".LUCScoreParent").hide();
        }
    });
});