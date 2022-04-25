import React from "react";
import { Background, FooterText, BackgroundMidle, Logo, MidleContent, SideBar, TopContent, TopImage, Wrapper, Image, BackgroundBottom, MidleText, MidleBox, Footer, EndContainer, EndText, PayButton, LinkTo } from "./styles";

import logo from '../../assets/images/logo.png'
import iphones from '../../assets/images/iphones.png'
import logocolor from '../../assets/images/logocolor.png'
import iphone from '../../assets/images/iphone.png'

const Home = () => {
    return (
        <Wrapper>
            <Background>
                <SideBar>
                    <Logo src={logocolor} />
                </SideBar>
                <TopContent>
                    <TopImage src={iphones} />
                </TopContent>
            </Background>
            <BackgroundBottom>
                <Image src={iphone} />
                <MidleContent>
                    <MidleBox>
                        <MidleText>f = 1−g00 =
                            2m/r−ε2/r2
                            <br />
                            (5.40)
                            <br />
                        </MidleText>
                    </MidleBox>
                    <PayButton>
                        <LinkTo to={'/payment'}>
                            checkout
                        </LinkTo>
                    </PayButton>
                </MidleContent>
            </ BackgroundBottom>
            <BackgroundMidle>
                <EndContainer>
                    <EndText>"É o ponto do universo em que as equações da física param de funcionar, por algum motivo. Normalmente é porque as quantidades físicas como a massa ou a densidade crescem, vão para o infinito"</EndText>
                </EndContainer>
            </BackgroundMidle>
            <Footer>
                <FooterText>developed by vitosandrin</FooterText>
            </Footer>
        </Wrapper>

    )
}

export default Home;