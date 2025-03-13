<?php

namespace App\Exceptions;

use Spatie\LaravelIgnition\Exceptions\ViewException;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Stancl\Tenancy\Contracts\TenantCouldNotBeIdentifiedException;
use Stancl\Tenancy\Exceptions\TenantDatabaseDoesNotExistException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if (
            ($exception instanceof TenantDatabaseDoesNotExistException) ||
            (tenant() && (! tenant('ready')) && $exception instanceof QueryException) ||
            (tenant() && (! tenant('ready')) && $exception instanceof ViewException && $exception->getPrevious() instanceof QueryException)
        ) {
            return response()->view('errors.building');
        }

        if ($exception instanceof TenantCouldNotBeIdentifiedException) {
            return redirect()->route('app');
        }

        return parent::render($request, $exception);
    }
}
