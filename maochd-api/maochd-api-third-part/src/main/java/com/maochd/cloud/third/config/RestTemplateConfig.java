package com.maochd.cloud.third.config;

import lombok.extern.slf4j.Slf4j;
import okhttp3.OkHttpClient;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.OkHttp3ClientHttpRequestFactory;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.concurrent.TimeUnit;

/**
 * RestTemplateConfig
 */
@Slf4j
@Configuration
@EnableConfigurationProperties
public class RestTemplateConfig {

    @Bean
    public ClientHttpRequestFactory okHttp3ClientHttpRequestFactory() {
        return new OkHttp3ClientHttpRequestFactory(new OkHttpClient.Builder().
                readTimeout(30, TimeUnit.SECONDS).
                connectTimeout(30, TimeUnit.SECONDS).
                writeTimeout(30, TimeUnit.SECONDS).
                retryOnConnectionFailure(false).
                build());
    }

    @Bean
    public RestTemplate restTemplate() {
        RestTemplate template = new RestTemplateBuilder().
                requestFactory(this::okHttp3ClientHttpRequestFactory).
                build();
        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setSupportedMediaTypes(Collections.singletonList(MediaType.TEXT_HTML));
        template.getMessageConverters().add(converter);
        return template;
    }

}
