import styled from "styled-components";

const Contact = () => {
    const Wrapper = styled.section`
        padding: 9rem 0 5rem 0;
        text-align: center;
        .container {
            margin-top: 6rem;
            .contact-form {
                max-width: 50rem;
                margin: auto;
                .contact-inputs {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                    input[type="submit"] {
                        cursor: pointer;
                        transition: all 0.2s;
                        &:hover {
                            background-color: ${({ theme }) => theme.colors.white};
                            border: 1px solid ${({ theme }) => theme.colors.btn};
                            color: ${({ theme }) => theme.colors.btn};
                            transform: scale(0.9);
                        }
                    }
                }
            }
        }
    `;

    return (
        <Wrapper>
            <h2 className="common-heading">Contact page</h2>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2601419404955!2d73.91457833097272!3d18.562307005716427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1416b608a23%3A0x463d0c82828e78b7!2sPhoenix%20Marketcity%2C%20207%2C%20Viman%20Nagar%20Rd%2C%20Clover%20Park%2C%20Viman%20Nagar%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1680524434509!5m2!1sen!2sin"
                title="google map embedding"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/xdovwynp" method="post" className="contact-inputs">
                        <input type="text" placeholder="username" name="username" required autoComplete="off" />
                        <input type="email" name="Email" placeholder="Email" required autoComplete="off" />
                        <textarea name="Message" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
