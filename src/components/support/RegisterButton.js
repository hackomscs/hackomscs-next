import styled from 'styled-components';

const Button = styled.a`
  border: none;
  color: white;
  // todo: make dynamic 
  background: var(--get-in-touch-gradient);
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  filter: drop-shadow(0px 6px 5px rgba(0, 0, 0, 0.25));
  padding: 20px 30px;
  border-radius: 20px;
  transition: filter 0.4s, transform 0.4s;

  svg {
    width: 50px;
    height: 50px;
  }

  &:hover {
    cursor: pointer;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
    transform: translateY(5px);
  }

  align-self: center;
  margin-top: 28px;
  margin-bottom: 8px;
  text-decoration: none;

`
const Text = styled.div`
  font-size: 30px;
  font-weight: 600;
`
//href ="https://my.mlh.io/oauth/authorize?client_id=LO02M-OMjyeeqM8smtZhOgFF-IHAxtw_nzpr_4T1lHs&redirect_uri=https%3A%2F%2Fhackomscs.com%2Fmymlh-callback&response_type=token"
function RegisterButton() {
  return (
    <Button href = "https://forms.gle/1d4WhVDPBobVt6hw7"> 
      <Text>Apply Now!</Text>
    </Button>
  )
}

export default RegisterButton;