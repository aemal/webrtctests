


<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script><script>// <![CDATA[
$(document).ready(function() {
                $.get("https://service.xirsys.com/ice",
                    {
                        ident: "aaaemal",
                        secret: "aa58e1aaaf0-3dcd-11e6-b26c-b13a41b2aa7c",
                        domain: "www.helpme.com.de",
                        application: "default",
                        room: "default",
                        secure: 1
                    },
                    function(data, status) {
                        alert("Data: " + data + "nnStatus: " + status);
                        console.log("Data: " + data + "nnStatus: " + status);
                    }
                );
            });
// ]]></script>