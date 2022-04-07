package com.maochd.cloud.thirdparty.utils;

import cn.hutool.core.collection.CollUtil;
import cn.hutool.core.collection.CollectionUtil;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.client.utils.URIBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import java.net.URI;
import java.util.AbstractMap;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@Component
@SuppressWarnings("uncheck")
public class RestUtils {

    @Resource
    private RestTemplate restTemplate;

    @SneakyThrows
    public <T> T postForJson(String url, Object body, Class<T> clazz) {
        HttpEntity<Object> entity = entity(body, MediaType.APPLICATION_JSON);
        return post(url, entity, clazz);
    }

    @SneakyThrows
    public <T> T postForJson(String url, Object body, ParameterizedTypeReference<T> reference) {
        HttpEntity<Object> entity = entity(body, MediaType.APPLICATION_JSON);
        return post(url, entity, reference);
    }

    @SneakyThrows
    public <T> T postForJson(String url, Object body, HttpHeaders headers, Class<T> clazz) {
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Object> entity = entity(body, headers);
        return post(url, entity, clazz);
    }

    @SneakyThrows
    public <T> T postForJson(String url, Object body,
                             HttpHeaders headers, ParameterizedTypeReference<T> reference) {
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<Object> entity = entity(body, headers);
        return post(url, entity, reference);
    }

    @SneakyThrows
    public <T> T postForMap(String url, Map<String, Object> paramMap, Class<T> clazz) {
        MultiValueMap<String, Object> dataMap = new LinkedMultiValueMap<>();
        paramMap.forEach(dataMap::add);
        HttpEntity<Object> entity = entity(dataMap, MediaType.APPLICATION_FORM_URLENCODED);
        return post(url, entity, clazz);
    }

    @SneakyThrows
    public <T> T postForMap(String url,
                            Map<String, Object> paramMap, ParameterizedTypeReference<T> reference) {
        MultiValueMap<String, Object> dataMap = new LinkedMultiValueMap<>();
        paramMap.forEach(dataMap::add);
        HttpEntity<Object> entity = entity(dataMap, MediaType.APPLICATION_FORM_URLENCODED);
        return post(url, entity, reference);
    }

    @SneakyThrows
    public <T> T postForMap(String url,
                            Map<String, Object> paramMap, HttpHeaders headers, Class<T> clazz) {
        MultiValueMap<String, Object> dataMap = new LinkedMultiValueMap<>();
        paramMap.forEach(dataMap::add);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<Object> entity = entity(dataMap, headers);
        return post(url, entity, clazz);
    }

    @SneakyThrows
    public <T> T postForMap(String url, Map<String, Object> paramMap,
                            HttpHeaders headers, ParameterizedTypeReference<T> reference) {
        MultiValueMap<String, Object> dataMap = new LinkedMultiValueMap<>();
        paramMap.forEach(dataMap::add);
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        HttpEntity<Object> entity = entity(dataMap, headers);
        return post(url, entity, reference);
    }

    @SneakyThrows
    public <T> T getForMap(String url, Map<String, String> paramMap, Class<T> clazz) {
        return get(url, paramMap, entity(), clazz);
    }

    @SneakyThrows
    public <T> T getForMap(String url,
                           Map<String, String> paramMap, ParameterizedTypeReference<T> reference) {
        return get(url, paramMap, entity(), reference);
    }

    @SneakyThrows
    public <T> T getForMap(String url,
                           Map<String, String> paramMap, HttpHeaders headers, Class<T> clazz) {
        return get(url, paramMap, entity(headers), clazz);
    }

    @SneakyThrows
    public <T> T getForMap(String url, Map<String, String> paramMap,
                           HttpHeaders headers, ParameterizedTypeReference<T> reference) {
        return get(url, paramMap, entity(headers), reference);
    }

    @SneakyThrows
    public URI api(String url, Map<String, String> paramMap) {
        URIBuilder builder = new URIBuilder(url);
        if (CollectionUtil.isNotEmpty(paramMap)) {
            paramMap.forEach(builder::setParameter);
        }
        return builder.build();
    }

    private HttpEntity<Object> entity() {
        HttpHeaders headers = new HttpHeaders();
        return new HttpEntity<>(headers);
    }

    private HttpEntity<Object> entity(HttpHeaders headers) {
        return new HttpEntity<>(headers);
    }

    private HttpEntity<Object> entity(Object body, MediaType mediaType) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(mediaType);
        return new HttpEntity<>(body, headers);
    }

    private HttpEntity<Object> entity(Object body, HttpHeaders headers) {
        return new HttpEntity<>(body, headers);
    }

    private <T> T post(String url, HttpEntity<Object> entity, Class<T> clazz) {
        return request(url, CollUtil.createMap(AbstractMap.class), HttpMethod.POST, entity, clazz);
    }

    private <T> T post(String url,
                       HttpEntity<Object> entity, ParameterizedTypeReference<T> reference) {
        return request(url, CollUtil.createMap(AbstractMap.class), HttpMethod.POST, entity, reference);
    }

    private <T> T get(String url, Map<String, String> paramMap, HttpEntity<Object> entity, Class<T> clazz) {
        return request(url, paramMap, HttpMethod.GET, entity, clazz);
    }

    private <T> T get(String url, Map<String, String> paramMap,
                      HttpEntity<Object> entity, ParameterizedTypeReference<T> reference) {
        return request(url, paramMap, HttpMethod.GET, entity, reference);
    }

    private <T> T result(ResponseEntity<T> resp) {
        if (resp == null || !HttpStatus.OK.equals(resp.getStatusCode())) {
            log.error("远程服务调用失败:{}", resp);
            throw new RuntimeException("远程服务调用失败");
        }
        return resp.getBody();
    }

    private <T> T request(String url, Map<String, String> paramMap,
                          HttpMethod method, HttpEntity<Object> entity, Class<T> clazz) {
        return result(restTemplate.exchange(api(url, paramMap), method, entity, clazz));
    }

    private <T> T request(String url, Map<String, String> paramMap, HttpMethod method,
                          HttpEntity<Object> entity, ParameterizedTypeReference<T> reference) {
        return result(restTemplate.exchange(api(url, paramMap), method, entity, reference));
    }
}

