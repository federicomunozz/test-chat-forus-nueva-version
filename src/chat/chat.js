import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const LiveAgent = () => {
    const initializeChat = () => {
        try {
			embeddedservice_bootstrap.settings.language = 'es_MX'; // For example, enter 'en' or 'en-US'

			embeddedservice_bootstrap.init(
				'00DDK0000009k6i',
				'Prueba_Chat_Chile',
				'https://forus--pruebachat.sandbox.my.site.com/ESWPruebaChatChile1704814357090',
				{
					scrt2URL: 'https://forus--pruebachat.sandbox.my.salesforce-scrt.com'
				}
			);
		} catch (err) {
			console.error('Error loading Embedded Messaging: ', err);
		}
    };

    // This will run one time after the component mounts
    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
            console.log('page loaded');
            // do something else
            initializeChat();
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
        <section>
            <Helmet>
                <script
                    defer
                    type="text/javascript"     
                    src="https://forus--pruebachat.sandbox.my.site.com/ESWPruebaChatChile1704814357090/assets/js/bootstrap.min.js">
                </script>
            </Helmet>
        </section>
      );
};

export default LiveAgent;