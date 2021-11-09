package com.maochd.cloud.common.core.handler;

import cn.hutool.core.util.StrUtil;
import com.maochd.cloud.common.core.constant.CommonConstant;
import com.maochd.cloud.common.core.domain.R;
import com.maochd.cloud.common.core.exception.BaseException;
import com.maochd.cloud.common.core.exception.RedisBizException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.sql.BatchUpdateException;
import java.sql.DataTruncation;
import java.util.stream.Collectors;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public R<?> exception(Exception e) {
        log.error("Throwable:{},Msg:{}", e.getCause(), e.getMessage());
        for (StackTraceElement element : e.getStackTrace()) {
            String className = element.getClassName();
            if (StrUtil.contains(className, "com.maochd")) {
                log.error("Exception:{}", element);
                break;
            }
        }
        return R.fail(CommonConstant.EXCEPTION);
    }

    @ExceptionHandler(BaseException.class)
    public R<?> baseException(BaseException e) {
        log.error("BaseException:{}", e.getMessage());
        return R.fail(e.getMessage());
    }

    @ExceptionHandler(RedisBizException.class)
    public R<?> redisBizException(RedisBizException e) {
        log.error("redisBizException:{}", e.getMessage());
        return R.fail(e.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public R<?> methodArgumentNotValidException(MethodArgumentNotValidException e) {
        return R.fail(e.getBindingResult().getAllErrors().stream().
                map(DefaultMessageSourceResolvable::getDefaultMessage).
                collect(Collectors.joining(";")));
    }

    @ExceptionHandler(NullPointerException.class)
    public R<?> nullPointerException(NullPointerException e) {
        for (StackTraceElement element : e.getStackTrace()) {
            String className = element.getClassName();
            if (StrUtil.contains(className, "com.maochd")) {
                log.error("NullPointerException:{}", element);
                break;
            }
        }
        return R.fail(CommonConstant.EXCEPTION);
    }

    @ExceptionHandler(NumberFormatException.class)
    public R<?> numberFormatException(NumberFormatException e) {
        for (StackTraceElement element : e.getStackTrace()) {
            String className = element.getClassName();
            if (StrUtil.contains(className, "com.maochd")) {
                log.error("NumberFormatException:{}", element);
                break;
            }
        }
        return R.fail(CommonConstant.DATA_ERROR);
    }

    @ExceptionHandler(DataTruncation.class)
    public R<?> sqlDataTruncation(DataTruncation e) {
        log.error("DataTruncation:{}", e.getMessage());
        return R.fail(CommonConstant.DATA_ERROR);
    }

    @ExceptionHandler(BatchUpdateException.class)
    public R<?> sqlBatchUpdateException(BatchUpdateException e) {
        log.error("BatchUpdateException:{}", e.getMessage());
        return R.fail(CommonConstant.DATA_ERROR);
    }
}
