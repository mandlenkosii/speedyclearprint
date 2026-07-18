import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import Container from "../ui/Container";
import QuoteForm from "../ui/QuoteForm";
import SectionHeading from "../ui/SectionHeading";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f3eee8] py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Send us your brief. We'll send back a quote."
            />

            <div className="mt-12 space-y-8">
              <div className="flex gap-4">
                <Phone className="text-[var(--primary)]" />

                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>

                  <p>+27 68 018 2295</p>
                  <p>+27 11 676 6839</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-[var(--primary)]" />

                <div>
                  <h3 className="font-semibold">
                    Email
                  </h3>

                  <p>quotes@speedyclearprint.co.za</p>
                  <p>artwork@speedyclearprint.co.za</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[var(--primary)]" />

                <div>
                  <h3 className="font-semibold">
                    Address
                  </h3>

                  <p>
                    Room B (Lower back parking)
                  </p>

                  <p>
                    Valley Centre
                  </p>

                  <p>
                    396 Jan Smuts Avenue
                  </p>

                  <p>
                    Craighall, Randburg
                  </p>

                  <p>
                    Johannesburg, 2196
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}

          <QuoteForm />
        </div>
      </Container>
    </section>
  );
}

export default Contact;