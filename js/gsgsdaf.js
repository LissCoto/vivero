$(document).ready(
        function()
{
    $(".email").blur(
            function()
    {
        $(this).parent().children("div.emailEmpty").slideDown();
    });
});