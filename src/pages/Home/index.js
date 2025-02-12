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
    BoxButtons,
    ButtonHome,
    TextButton,
    Banner,
    BoxBanner,
    BoxBotaoShare,
    BoxBotaoLike,
    InformacaoCartao,
    TituloInformacaoCartao,
    TipoInformacaoCartao,
    TempoInformacaoCartao,
    CartaoReceitas,
    ButtonIcon,
 } from './styles';
import {Alert} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Receitas from '../Receitas';
import TelaReceitas from '../Receitas/TelaReceitas';

export default function Home({navigation}){

    return(
        <Container showsVerticalScrollIndicator={false}>

                <BoxLogo>
                    <Logo
                        source={require('../../../assets/imagens/logo.png')}
                    />
                    <ButtonHome>
                        <TextButton>
                            Home
                        </TextButton>
                    </ButtonHome>
                </BoxLogo>
                <BoxBanner>
                    <Banner
                        source={require('../../../assets/imagens/banners/bannerHome.jpg')}
                    />
                </BoxBanner>


                <TitleReceitasAgrado>
                    Receitas do seu agrado
                </TitleReceitasAgrado>

                <ListReceitasAgrado  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Cartao activeOpacity={0.9} onPress={() => navigation.navigate('Receitas')}>
                        <FoodsReceitasAgrado
                            source={require('../../../assets/imagens/foods/pizzaMussarela.jpg')}
                        />
                        
                        <InformacaoCartao>
                            <TituloInformacaoCartao>
                                Pizza de Mussarela
                            </TituloInformacaoCartao>

                            <TipoInformacaoCartao>
                                Massas
                            </TipoInformacaoCartao>

                            <TempoInformacaoCartao>
                                <FontAwesome5 name="clock" size={12} color="#B5B5B5"/> 45min
                            </TempoInformacaoCartao>


                            <BoxButtons>
                                <BoxBotaoLike activeOpacity={0.8}>
                                    <FontAwesome name="heart-o" size={22} color="#DB9600"/>
                                </BoxBotaoLike>
                                <BoxBotaoShare activeOpacity={0.8} onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para compartilhar')}}>
                                    <FontAwesome5 name="code-branch" size={22} color="#DB9600"/>
                                </BoxBotaoShare>
                            </BoxButtons>
                        
                        </InformacaoCartao>
                    </Cartao>
                    <Cartao activeOpacity={0.9} onPress={() => navigation.navigate('Receitas')}>
                        <FoodsReceitasAgrado
                            source={require('../../../assets/imagens/foods/SALADA.jpg')}
                        />

                        <InformacaoCartao>
                            <TituloInformacaoCartao>
                                Salada de Vegetais
                            </TituloInformacaoCartao>

                            <TipoInformacaoCartao>
                                Saladas
                            </TipoInformacaoCartao>

                            <TempoInformacaoCartao>
                                <FontAwesome5 name="clock" size={12} color="#B5B5B5"/> 30min
                            </TempoInformacaoCartao>

                            <BoxButtons>
                                <BoxBotaoLike activeOpacity={0.8}>
                                    <FontAwesome name="heart-o" size={22} color="#DB9600"/>
                                </BoxBotaoLike>
                                <BoxBotaoShare activeOpacity={0.8} onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para compartilhar')}}>
                                    <FontAwesome5 name="code-branch" size={22} color="#DB9600"/>
                                </BoxBotaoShare>
                            </BoxButtons>
                        
                        </InformacaoCartao>
                        
                    </Cartao>
                    <Cartao activeOpacity={0.9} onPress={() => navigation.navigate('Receitas')}>
                        <FoodsReceitasAgrado
                            resizeMode="contain"
                            source={require('../../../assets/imagens/foods/frango.jpg')}
                        />

                        <InformacaoCartao>
                            <TituloInformacaoCartao>
                                Frango a passarinho
                            </TituloInformacaoCartao>

                            <TipoInformacaoCartao>
                                Frituras
                            </TipoInformacaoCartao>

                            <TempoInformacaoCartao>
                                <FontAwesome5 name="clock" size={12} color="#B5B5B5"/> 60min
                            </TempoInformacaoCartao>

                            <BoxButtons>
                                <BoxBotaoLike activeOpacity={0.8}>
                                    <FontAwesome name="heart-o" size={22} color="#DB9600"/>
                                </BoxBotaoLike>
                                <BoxBotaoShare activeOpacity={0.8} onPress={() => {navigation.navigate('Perfil'), Alert.alert('Aviso', 'Acesse sua conta para poder compartilhar')}}>
                                    <FontAwesome5 name="code-branch" size={22} color="#DB9600"/>
                                </BoxBotaoShare>
                            </BoxButtons>
                        
                        </InformacaoCartao>
                        
                    </Cartao>
                </ListReceitasAgrado>
                
                    <TitleTipoReceitas>
                        Tipos de Receitas
                    </TitleTipoReceitas>
                
                <ListTipoReceitas horizontal={true} showsHorizontalScrollIndicator={false}>
                        <CartaoReceitas>
                            <Legendas>Hambúrgueres</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/x.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>

                        <CartaoReceitas>
                            <Legendas>Massas</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/massas.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>

                        <CartaoReceitas>
                            <Legendas>Churrasco</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/espeto.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>

                        <CartaoReceitas>
                            <Legendas>Frituras</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/coxinha.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>

                        <CartaoReceitas>
                            <Legendas>Sobremesas</Legendas>
                                <FoodsTipoReceitas
                                        source={require('../../../assets/imagens/foods/bolo.png')}
                                />
                                <ButtonIcon activeOpacity={0.8} onPress={() => navigation.navigate('Receitas')}>
                                    <Ionicons name="arrow-redo-outline" size={30} color="#DB9600" />
                                </ButtonIcon>
                        </CartaoReceitas>
                </ListTipoReceitas>
        </Container>
    )
}
