import styled from 'styled-components';
import CertificationPattern from '../Assets/certification-pattern.svg';
import CertificationPatternBottom from '../Assets/certification-pattern-bottom.svg';

interface Props {
    type: string;
    timestamp: Date;
    handle: string;
};

export default function Certification ({ type, timestamp, handle }: Props) {
    return (
        <>
            <Container>
                {type} Reading
                <DL>
                    <dt>for</dt>
                    <dd>{handle}</dd>
                    <dt>on</dt>
                    <dd>
                        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][timestamp.getMonth()]} {ordinal(timestamp.getDate())} {timestamp.getFullYear()}
                    </dd>
                </DL>
            </Container>
        </>
    );
}

function ordinal(n: number) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v-20)%10] || s[v] || s[0]);
}

const Container = styled.div`
box-sizing: border-box;
width: 255px;
padding: 15px 10px;
margin: 25px auto;

background:
    url(${CertificationPattern}) no-repeat top center,
    url(${CertificationPatternBottom}) no-repeat bottom center;

font-family: Almendra;
font-size: 18px;
font-style: italic;
`;

const DL = styled.dl`
margin: 5px 0 0 0;
line-height: 21px;

> dt {
    width: 16px;
    margin: 0 10px 5px 0;
    float: left;
    font-size: 12px;
}

> dd {
    margin: 0 0 5px 0;
    font-size: 16px;
    font-style: normal;
}
`;