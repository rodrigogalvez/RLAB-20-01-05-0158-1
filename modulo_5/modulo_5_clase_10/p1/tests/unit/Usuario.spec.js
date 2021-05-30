import { shallowMount } from '@vue/test-utils'
import Usuario from '@/components/Usuario.vue'

// Conjunto de pruebas:
describe('Pruebas del componente Usuario.vue', ()=>{

    it('Prueba: se pasa el nombre usuario como propiedad', ()=>{
        const wrapper = shallowMount(Usuario,{ propsData: { name: "Eduardo" }});
        expect(wrapper.html()).toContain("Usuario Eduardo");
    })


    test('El método activarUsuario, activa el usuario', () => {
        const wrapper = shallowMount(Usuario);
        expect(wrapper.vm.usuarioActivo).toBe(false);
        wrapper.vm.activarUsuario();
        expect(wrapper.vm.usuarioActivo).toBe(true);
    });

    test('El botón debe activar el usuario', () => {
        // El espía se usa para mirar eventos asociados a botones o inputs o cualquier cosa en el HTML.
        const spy = jest.spyOn(Usuario.methods, 'activarUsuario');
        const wrapper = shallowMount(Usuario);
        wrapper.find('button').trigger('click');
        expect(spy).toHaveBeenCalled();
    });

});