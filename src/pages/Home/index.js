import React from 'react';
import {
    Container,
    TitleTipoReceitas,
    Logo,
    BoxLogo,
    ListTipoReceitas,
    FoodsTipoReceitas,
    Cartao,
    Legendas,
    TitleReceitasAgrado,
    FoodsReceitasAgrado,
    ListReceitasAgrado,
    ViewButtons,
    ButtonHome,
    TextButton,
 } from './styles';
 import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Home(){
    return(
        <Container >
            <BoxLogo>
                <Logo
                    resizeMode="stretch"
                    source={require('../../../assets/imagens/logo.png')}
                />
                <ButtonHome activeOpacity={0.7}>
                    <TextButton>
                        Home
                    </TextButton>
                </ButtonHome>
            </BoxLogo>

                <TitleTipoReceitas>
                    Tipos de Receitas
                </TitleTipoReceitas>
            
            <ListTipoReceitas horizontal={true} showsHorizontalScrollIndicator={false}>
                <Cartao>
                    <FoodsTipoReceitas
                            source={require('../../../assets/imagens/foods/xcheese.png')}
                    />
                    <Legendas>Hambúrgueres</Legendas>
                </Cartao>
                <Cartao>
                    <FoodsTipoReceitas
                            source={require('../../../assets/imagens/foods/massas.png')}
                    />
                    <Legendas>Massas</Legendas>
                </Cartao>
                <Cartao>
                    <FoodsTipoReceitas
                            source={require('../../../assets/imagens/foods/bebidas.png')}
                    />
                    <Legendas>Bebidas</Legendas>
                </Cartao>
                <Cartao>
                    <FoodsTipoReceitas
                            source={require('../../../assets/imagens/foods/sorvete.png')}
                    />
                    <Legendas>Sorvetes</Legendas>
                </Cartao>
                <Cartao>
                    <FoodsTipoReceitas
                            source={require('../../../assets/imagens/foods/bolo.png')}
                    />
                    <Legendas>Sobremesas</Legendas>
                </Cartao>
            </ListTipoReceitas>

            <TitleReceitasAgrado>
                Receitas do seu agrado
            </TitleReceitasAgrado>

            <ListReceitasAgrado  horizontal={true} showsHorizontalScrollIndicator={false}>
                <Cartao>
                    <FoodsReceitasAgrado
                        source={require('../../../assets/imagens/foods/sucoLaranja.png')}
                    />
                        <ViewButtons>
                            <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                            <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                        </ViewButtons>
                </Cartao>
                <Cartao>
                    <FoodsReceitasAgrado
                        source={require('../../../assets/imagens/foods/waffles.png')}
                    />
                    <ViewButtons>
                        <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                        <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                    </ViewButtons>
                </Cartao>
                <Cartao>
                    <FoodsReceitasAgrado
                        source={require('../../../assets/imagens/foods/pastel.png')}
                    />
                    <ViewButtons>
                        <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                        <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                    </ViewButtons>
                </Cartao>
                <Cartao>
                    <FoodsReceitasAgrado
                        source={require('../../../assets/imagens/foods/feijoada.png')}
                    />
                    <ViewButtons>
                        <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                        <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                    </ViewButtons>
                </Cartao>
                <Cartao>
                    <FoodsReceitasAgrado
                        source={require('../../../assets/imagens/foods/milkshake.png')}
                    />
                    <ViewButtons>
                        <MaterialCommunityIcons name="share-variant" size={24} color={'#121212'}/>
                        <MaterialCommunityIcons name="thumb-up" size={24} color={'#121212'}/>
                    </ViewButtons>
                </Cartao>

            </ListReceitasAgrado>

        </Container>
    )
}