import { useMemo, useState } from 'react';
import logo from './assets/logo.jpg';

export default function App() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [mostrarPago, setMostrarPago] = useState(false);
  const [copiado, setCopiado] = useState('');

  const whatsappNumero = '5491130956786';
  const whatsappMensajeGeneral =
    'Hola! Quiero consultar por una chapita personalizada de Obi ID.';
  const whatsappMensajeTransferencia =
    'Hola! Quiero pagar por transferencia, me pasas tus datos?';

  const alias = 'jesussll.mp';
  const cvu = '0000003100144796738292';

  const colecciones = [
    {
      id: 1,
      categoria: 'Obi Spark',
      precio: 'Desde $8.500',
      descripcion:
        'Tu mejor amigo, con el resplandor de una estrella. Chapas hechas a mano con resina brillante, totalmente personalizables y disponibles en tres tamaños.',
      estilo: 'spark',
      colorBorde: '#F2D24B',
      fondo: '#FFFDF7',
      modelos: [
        'Obi Neptune',
        'Obi Starwave',
        'Obi Purple Mist',
        'Obi Ruby Glow',
        'Obi Emerald Comet',
        'Obi Sunset Ray',
        'Obi Daylight',
        'Obi Soft Bloom',
      ],
    },
    {
      id: 2,
      categoria: 'Obi Charm',
      precio: 'Desde $8.500',
      descripcion:
        'Podés personalizarlo como quieras: elegir tus tonos favoritos o combinar varios colores para crear un diseño exclusivo que refleje la esencia de tu compañero peludo.',
      estilo: 'charm',
      colorBorde: '#42ADEB',
      fondo: '#F6E7A8',
      modelos: [
        'Pink Blossom',
        'Sunny Petal',
        'Aqua Sky',
        'Night Flower',
        'Red Bloom',
      ],
    },
    {
      id: 3,
      categoria: 'Estrellas de Obi',
      precio: 'Desde $8.500',
      descripcion:
        'Exclusiva, llamativa y hecha para verdaderos protagonistas. Elegí el color, grabá su nombre y escogé el tamaño perfecto.',
      estilo: 'estrellas',
      colorBorde: '#F2D24B',
      fondo: '#FFFDF7',
      modelos: ['Pink Star', 'Golden Heart', 'Starlight', 'Galaxia', 'Obi Rose'],
    },
    {
      id: 4,
      categoria: 'Cosmic Balance',
      precio: 'Desde $8.500',
      descripcion:
        'Dos fuerzas, un mismo universo. Representa el equilibrio entre la luz y la oscuridad.',
      estilo: 'cosmic',
      colorBorde: '#143A8A',
      fondo: '#FFFDF7',
      modelos: ['Black Orbit', 'White Orbit'],
    },
  ];

  const categorias = ['Todas', ...colecciones.map((c) => c.categoria)];

  const coleccionesFiltradas = useMemo(() => {
    if (categoriaActiva === 'Todas') return colecciones;
    return colecciones.filter((c) => c.categoria === categoriaActiva);
  }, [categoriaActiva]);

  const tamanos = [
    {
      nombre: 'Pequeño',
      detalle: 'Ideal para razas mini',
      medida: 'Aprox. 3,8 cm',
      precio: '$8.500',
    },
    {
      nombre: 'Mediano',
      detalle: 'Perfecto para la mayoría de perros de tamaño estándar',
      medida: 'Aprox. 4,8 cm',
      precio: '$9.500',
    },
    {
      nombre: 'Grande',
      detalle: 'Diseñado para perros grandes',
      medida: 'Aprox. 5,8 cm',
      precio: '$10.500',
    },
  ];

  const copiarTexto = async (texto, tipo) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(tipo);
      setTimeout(() => setCopiado(''), 1800);
    } catch (error) {
      console.error('No se pudo copiar:', error);
    }
  };

  const abrirWhatsappColeccion = (coleccion) => {
    const mensaje = `Hola! Quiero consultar por la colección ${coleccion}.`;
    window.open(
      `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(mensaje)}`,
      '_blank'
    );
  };

  const seccionCard = {
    borderRadius: '34px',
    padding: '28px',
    boxShadow: '0 12px 30px rgba(18, 62, 145, 0.10)',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#F4F1EE',
        backgroundImage:
          'repeating-linear-gradient(90deg, #F4F1EE 0 34px, #F0D54C 34px 48px)',
        color: '#143A8A',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backdropFilter: 'blur(10px)',
          background: 'rgba(244, 241, 238, 0.92)',
          borderBottom: '3px solid #42ADEB',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '18px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img
              src={logo}
              alt="Logo Obi ID"
              style={{
                width: '72px',
                height: '72px',
                objectFit: 'cover',
                borderRadius: '18px',
                background: '#fff',
                border: '3px solid #F0D54C',
                boxShadow: '0 8px 22px rgba(0,0,0,0.08)',
              }}
            />
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: '31px',
                  color: '#42ADEB',
                  lineHeight: 1,
                }}
              >
                Obi ID
              </h1>
              <p
                style={{
                  margin: '6px 0 0',
                  color: '#143A8A',
                  fontWeight: 'bold',
                  fontSize: '15px',
                }}
              >
                Catálogo 2025 • Diseños personalizados
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="#catalogo"
              style={{
                textDecoration: 'none',
                background: '#143A8A',
                color: '#fff',
                padding: '12px 18px',
                borderRadius: '999px',
                fontWeight: 'bold',
              }}
            >
              Ver catálogo
            </a>

            <a
              href={`https://wa.me/${whatsappNumero}?text=${encodeURIComponent(
                whatsappMensajeGeneral
              )}`}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none',
                background: '#25D366',
                color: '#fff',
                padding: '12px 18px',
                borderRadius: '999px',
                fontWeight: 'bold',
                boxShadow: '0 10px 24px rgba(37, 211, 102, 0.22)',
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '44px 20px 28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '26px',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.72)',
            ...seccionCard,
            border: '4px solid #143A8A',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: '#F0D54C',
              color: '#143A8A',
              padding: '8px 16px',
              borderRadius: '999px',
              fontWeight: 'bold',
              marginBottom: '16px',
            }}
          >
            Diseños personalizados ✨
          </div>

          <h2
            style={{
              fontSize: '54px',
              lineHeight: 1.02,
              margin: '0 0 14px',
              color: '#42ADEB',
            }}
          >
            Chapitas únicas para tu mascota
          </h2>

          <p
            style={{
              fontSize: '19px',
              lineHeight: 1.7,
              color: '#183D86',
              margin: '0 0 22px',
            }}
          >
            Elegí colección, tamaño y método de pago en un solo lugar. Un sitio
            inspirado en la estética de Obi ID y pensado para vender mejor.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href="#catalogo"
              style={{
                textDecoration: 'none',
                background: '#42ADEB',
                color: '#fff',
                padding: '14px 20px',
                borderRadius: '16px',
                fontWeight: 'bold',
              }}
            >
              Explorar colecciones
            </a>

            <a
              href="#pagos"
              style={{
                textDecoration: 'none',
                background: '#fff',
                color: '#143A8A',
                padding: '14px 20px',
                borderRadius: '16px',
                fontWeight: 'bold',
                border: '2px solid #F0D54C',
              }}
            >
              Métodos de pago
            </a>
          </div>
        </div>

        <div
          style={{
            background: 'rgba(255,255,255,0.82)',
            ...seccionCard,
            border: '4px solid #F0D54C',
            textAlign: 'center',
          }}
        >
          <img
            src={logo}
            alt="Obi ID portada"
            style={{
              width: '100%',
              maxWidth: '330px',
              borderRadius: '24px',
              background: '#fff',
              padding: '10px',
              boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '12px',
              marginTop: '20px',
              textAlign: 'left',
            }}
          >
            {[
              'Hechas a mano',
              'Resina epoxi UV',
              'Nombre personalizado',
              'Tres tamaños',
              'Envíos a todo el país',
              'Atención por WhatsApp',
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: '#fff',
                  border: '2px dashed #42ADEB',
                  borderRadius: '18px',
                  padding: '14px',
                  fontWeight: 'bold',
                  color: '#143A8A',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="catalogo"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '10px 20px 24px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.85)',
            border: '4px solid #42ADEB',
            ...seccionCard,
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <h3
              style={{
                fontSize: '40px',
                margin: '0 0 10px',
                color: '#143A8A',
              }}
            >
              Catálogo por colección
            </h3>
            <p
              style={{
                margin: 0,
                color: '#295298',
                fontSize: '18px',
                lineHeight: 1.6,
              }}
            >
              Agrupado en categorías y con una estética inspirada en tu catálogo
              2025.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '24px',
            }}
          >
            {categorias.map((categoria) => {
              const activa = categoriaActiva === categoria;
              return (
                <button
                  key={categoria}
                  onClick={() => setCategoriaActiva(categoria)}
                  style={{
                    border: activa ? '2px solid #143A8A' : '2px solid #D7EAFE',
                    background: activa ? '#F0D54C' : '#fff',
                    color: '#143A8A',
                    padding: '12px 18px',
                    borderRadius: '999px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  {categoria}
                </button>
              );
            })}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '20px',
            }}
          >
            {coleccionesFiltradas.map((coleccion) => (
              <div
                key={coleccion.id}
                style={{
                  background: coleccion.fondo,
                  border: `4px solid ${coleccion.colorBorde}`,
                  borderRadius: '28px',
                  padding: '22px',
                  boxShadow: '0 12px 24px rgba(18, 62, 145, 0.08)',
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    background:
                      coleccion.estilo === 'charm' ? '#42ADEB' : '#143A8A',
                    color: '#fff',
                    padding: '8px 14px',
                    borderRadius: '999px',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    marginBottom: '14px',
                  }}
                >
                  {coleccion.precio}
                </div>

                <h4
                  style={{
                    margin: '0 0 10px',
                    fontSize: '32px',
                    lineHeight: 1.05,
                    color: '#143A8A',
                  }}
                >
                  {coleccion.categoria}
                </h4>

                <p
                  style={{
                    margin: '0 0 18px',
                    color: '#183D86',
                    lineHeight: 1.6,
                    fontSize: '15px',
                  }}
                >
                  {coleccion.descripcion}
                </p>

                <div
                  style={{
                    background: '#fff',
                    borderRadius: '18px',
                    padding: '16px',
                    border: '1px solid rgba(20,58,138,0.10)',
                  }}
                >
                  <strong
                    style={{
                      display: 'block',
                      marginBottom: '10px',
                      color: '#143A8A',
                    }}
                  >
                    Modelos
                  </strong>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {coleccion.modelos.map((modelo) => (
                      <span
                        key={modelo}
                        style={{
                          background:
                            coleccion.estilo === 'charm' ? '#FFF8E2' : '#F6FAFF',
                          color: '#143A8A',
                          padding: '8px 10px',
                          borderRadius: '999px',
                          fontWeight: 'bold',
                          fontSize: '13px',
                          border: '1px solid rgba(20,58,138,0.08)',
                        }}
                      >
                        {modelo}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => abrirWhatsappColeccion(coleccion.categoria)}
                  style={{
                    width: '100%',
                    marginTop: '16px',
                    border: 'none',
                    background: '#25D366',
                    color: '#fff',
                    padding: '14px 16px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '15px',
                    boxShadow: '0 10px 20px rgba(37, 211, 102, 0.18)',
                  }}
                >
                  Consultar esta colección
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '10px 20px 24px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.86)',
            border: '4px solid #143A8A',
            ...seccionCard,
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '38px', margin: '0 0 10px' }}>
              Tamaños y personalización
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: '18px',
                color: '#2B5296',
                lineHeight: 1.6,
              }}
            >
              Tres tamaños, grabado del nombre al frente y opción de agregar
              teléfono detrás.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {tamanos.map((tamano) => (
              <div
                key={tamano.nombre}
                style={{
                  background: '#fff',
                  border: '3px solid #F0D54C',
                  borderRadius: '22px',
                  padding: '18px',
                }}
              >
                <h4
                  style={{
                    margin: '0 0 8px',
                    fontSize: '25px',
                    color: '#42ADEB',
                  }}
                >
                  {tamano.nombre}
                </h4>
                <p style={{ margin: '0 0 6px', fontWeight: 'bold' }}>
                  {tamano.detalle}
                </p>
                <p style={{ margin: '0 0 6px', color: '#345C9E' }}>
                  {tamano.medida}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#143A8A',
                  }}
                >
                  {tamano.precio}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '18px',
              background: '#F6FAFF',
              border: '2px dashed #42ADEB',
              borderRadius: '22px',
              padding: '18px',
              lineHeight: 1.8,
              color: '#183D86',
              fontWeight: 'bold',
            }}
          >
            <p style={{ margin: 0 }}>
              ✨ Grabamos el nombre de tu mascota en la parte frontal.
            </p>
            <p style={{ margin: 0 }}>
              📞 Podés agregar tu número de teléfono en la parte trasera.
            </p>
            <p style={{ margin: 0 }}>
              ⏳ Tiempo de elaboración: 5 a 7 días hábiles antes del envío.
            </p>
            <p style={{ margin: 0 }}>
              📦 Envíos a todo el país. El costo depende del destino.
            </p>
          </div>
        </div>
      </section>

      <section
        id="pagos"
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: '10px 20px 70px',
        }}
      >
        <div
          style={{
            background: 'rgba(255,255,255,0.88)',
            border: '4px solid #F0D54C',
            ...seccionCard,
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '22px' }}>
            <h3
              style={{
                fontSize: '38px',
                margin: '0 0 10px',
                color: '#143A8A',
              }}
            >
              Métodos de pago
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: '18px',
                color: '#32589A',
                lineHeight: 1.6,
              }}
            >
              Pagá por transferencia, consultanos por WhatsApp o abrí los datos
              de Mercado Pago para copiarlos.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '18px',
            }}
          >
            <div
              style={{
                background: '#fff',
                border: '3px solid #42ADEB',
                borderRadius: '24px',
                padding: '22px',
              }}
            >
              <h4 style={{ margin: '0 0 10px', fontSize: '28px' }}>
                Transferencia
              </h4>
              <p
                style={{
                  margin: '0 0 16px',
                  lineHeight: 1.6,
                  color: '#224A91',
                }}
              >
                Este botón abre WhatsApp con un mensaje listo para pedir los
                datos de transferencia.
              </p>

              <a
                href={`https://wa.me/${whatsappNumero}?text=${encodeURIComponent(
                  whatsappMensajeTransferencia
                )}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  background: '#25D366',
                  color: '#fff',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  fontWeight: 'bold',
                }}
              >
                Pedir datos por WhatsApp
              </a>
            </div>

            <div
              style={{
                background: '#fff',
                border: '3px solid #F0D54C',
                borderRadius: '24px',
                padding: '22px',
              }}
            >
              <h4 style={{ margin: '0 0 10px', fontSize: '28px' }}>
                Mercado Pago
              </h4>
              <p
                style={{
                  margin: '0 0 16px',
                  lineHeight: 1.6,
                  color: '#224A91',
                }}
              >
                Abrí un recuadro con el alias y el CVU para copiar todo rápido.
              </p>

              <button
                onClick={() => setMostrarPago(true)}
                style={{
                  border: 'none',
                  background: '#009EE3',
                  color: '#fff',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Ver datos de Mercado Pago
              </button>
            </div>
          </div>
        </div>
      </section>

      {mostrarPago && (
        <div
          onClick={() => setMostrarPago(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(12, 22, 54, 0.52)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '520px',
              background: '#fff',
              borderRadius: '28px',
              padding: '26px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
              border: '4px solid #009EE3',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '16px',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: '#143A8A',
                  fontSize: '30px',
                }}
              >
                Mercado Pago
              </h3>

              <button
                onClick={() => setMostrarPago(false)}
                style={{
                  border: 'none',
                  background: '#EFF7FF',
                  color: '#143A8A',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '18px',
                }}
              >
                ✕
              </button>
            </div>

            <div
              style={{
                background: '#F8FCFF',
                border: '2px solid #D6EEFA',
                borderRadius: '20px',
                padding: '18px',
                marginBottom: '14px',
              }}
            >
              <p
                style={{
                  margin: '0 0 8px',
                  color: '#5A6F9D',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                Alias
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '28px',
                  color: '#143A8A',
                  fontWeight: 'bold',
                  wordBreak: 'break-word',
                }}
              >
                {alias}
              </p>
            </div>

            <button
              onClick={() => copiarTexto(alias, 'alias')}
              style={{
                width: '100%',
                marginBottom: '14px',
                border: 'none',
                background: '#009EE3',
                color: '#fff',
                padding: '14px 18px',
                borderRadius: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {copiado === 'alias' ? 'Alias copiado' : 'Copiar alias'}
            </button>

            <div
              style={{
                background: '#F8FCFF',
                border: '2px solid #D6EEFA',
                borderRadius: '20px',
                padding: '18px',
                marginBottom: '14px',
              }}
            >
              <p
                style={{
                  margin: '0 0 8px',
                  color: '#5A6F9D',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                CVU
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: '23px',
                  color: '#143A8A',
                  fontWeight: 'bold',
                  wordBreak: 'break-word',
                }}
              >
                {cvu}
              </p>
            </div>

            <button
              onClick={() => copiarTexto(cvu, 'cvu')}
              style={{
                width: '100%',
                border: 'none',
                background: '#143A8A',
                color: '#fff',
                padding: '14px 18px',
                borderRadius: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {copiado === 'cvu' ? 'CVU copiado' : 'Copiar CVU'}
            </button>
          </div>
        </div>
      )}

      <footer
        style={{
          background: 'rgba(20, 58, 138, 0.94)',
          color: '#fff',
          textAlign: 'center',
          padding: '26px 20px',
        }}
      >
        <p style={{ margin: '0 0 8px', fontWeight: 'bold', fontSize: '20px' }}>
          Obi ID
        </p>
        <p style={{ margin: 0 }}>
          Diseños personalizados para mascotas • Hecho con amor y estilo
        </p>
      </footer>

      <a
        href={`https://wa.me/${whatsappNumero}?text=${encodeURIComponent(
          whatsappMensajeGeneral
        )}`}
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          right: '18px',
          bottom: '18px',
          background: '#25D366',
          color: '#fff',
          textDecoration: 'none',
          padding: '15px 18px',
          borderRadius: '999px',
          fontWeight: 'bold',
          boxShadow: '0 12px 28px rgba(0,0,0,0.18)',
          zIndex: 120,
        }}
      >
        💬 Escribinos
      </a>
    </div>
  );
}