import {useCallback, useEffect,useState,useRef} from "react";

function useTitle(title){
    useEffect(()=>{
        document.title = title;
    },[title]);
}

function useBind(initVal){
    let [value,setValue] = useState(initVal);
    let onChange = function(event){
        setValue(event.currentTarget.value);
    }
    return {
        value,
        onChange
    }
}

const useUpdate = () => {
    const [, setState] = useState(0);

    return useCallback(() => setState((num) => {console.log(num); return num + 1}), []);
};

const useUpdateEffect = (effect, deps) => {
    const isMounted = useRef(false);
  
    useEffect(() => {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return effect();
      }
    }, deps);
  };

  function usePersistFn(fn) {
    const ref = useRef(() => {
      throw new Error('Cannot call function while rendering.');
    });
  
    ref.current = fn;
  
    const persistFn = useCallback(((...args) => ref.current(...args)), [ref]);
  
    return persistFn;
  }


  const useMount = (fn) => {
    const fnPersist = usePersistFn(fn);
  
    useEffect(() => {
      if (fnPersist && typeof fnPersist === 'function') {
        fnPersist();
      }
    }, []);
  };

  const useUnmount = (fn) => {
    const fnPersist = usePersistFn(fn);
  
    useEffect(
      () => () => {
        if (fnPersist && typeof fnPersist === 'function') {
            fnPersist();
        }
      },
      [],
    );
  };

  const useDebounceFn = (fn,wait)=>{
      const _wait =  wait || 0;
      const timer = useRef();
      const fnRef = useRef(fn);
      fnRef.current = fn;
      const cancel = useCallback(()=>{
        if(timer.current){
            clearTimeout(timer.current);
        }
      },[])

      const run = useCallback((...args)=>{
          cancel();
          timer.current = setTimeout(()=>{
            fnRef.current(...args);
          },_wait)
      },[_wait,cancel])

      useEffect(()=> cancel,[]);

      return {
          run,
          cancel
      }
  }

  const useDebounce =(value,wait)=>{
    const [debounced, setDebounced] = useState(value);

    const { run } = useDebounceFn(() => {
        setDebounced(value);
      }, wait);
    
      useEffect(() => {
        run();
      }, [value]);
    
      return debounced;
  }

  const useThrottleFn = (fn,wait)=>{
    const _wait =  wait || 0;
    const timer = useRef();
    const fnRef = useRef(fn);
    fnRef.current = fn;

    const currentArgs = useRef([]);

    const cancel = useCallback(()=>{
      if(timer.current){
          clearTimeout(timer.current);
      }
      timer.current = undefined;
    },[])

    const run = useCallback((...args)=>{
        currentArgs.current = args;
        if(!timer.current){
            timer.current = setTimeout(()=>{
                fnRef.current(...args);
                timer.current = undefined;
            },_wait)
        }
        
    },[_wait,cancel])

    useEffect(()=> cancel,[]);

    return {
        run,
        cancel
    }
}

const useThrottle =(value,wait)=>{
    const [throttled, setThrottled] = useState(value);

    const { run } = useThrottleFn(() => {
        setThrottled(value);
      }, wait);
    
      useEffect(() => {
        run();
      }, [value]);
    
      return throttled;
}

export {
    useTitle,
    useBind,
    useUpdate,
    useUpdateEffect,
    usePersistFn,
    useMount,
    useUnmount,
    useDebounce,
    useThrottle
}